import os
import logging
from flask import Flask, render_template, redirect, request, session, url_for, flash
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env

app = Flask(__name__)


app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
@app.route("/get_movies", methods=["GET", "POST"])
def get_movies():
  movies = list(mongo.db.movies.find())
    
  return render_template("movies.html", movies=movies)


# this should be a post or a put.
@app.route('/upvote/<movie_id>', methods=["POST"])
def upvote(movie_id):
  #movieid = request.form["movie-input"]
  
  mongo.db.movies.update_one({ "_id": ObjectId(movie_id) },
  {
    '$inc': { "movie_rating": 1 }
  }, upsert=False)
  return 'OK'
  #change return here.

#something here flashed to say no movies found?
@app.route("/search", methods=["GET", "POST"])
def search():
    if request.method == "POST":
      query = request.form.get("query")
      movies = list(mongo.db.movies.find({"$text": {"$search": query}}))
      if len(movies) > 0:
        return render_template("search.html", movies=movies)
      else:
        flash("Doesn't look like we have that one!")
        return render_template ("search.html")
    return render_template("search.html")


@app.route("/login", methods=["GET", "POST"])
def login():
  if request.method == "POST":
    existing_user = mongo.db.users.find_one(
      {"username": request.form.get("username").lower()}
    )

    if existing_user:
      if check_password_hash(
        existing_user["password"], request.form.get("password")):
          session["user"] = request.form.get("username").lower()
          print("Successful login {}".format(request.form.get("username")))
          #add flash here?
          flash("Login Successful!")
          return redirect(url_for("profile", username=session["user"] ))
      else:
        #invalid password#flash message
        flash("Invalid Username or Password")
        return redirect(url_for("login")) 
    
    else:
      #username not in database
      flash("Invalid Username or Password")
      return redirect(url_for("login"))

  return render_template("login.html")



@app.route("/logout")
def logout():
    session.pop("user")
    flash("Logged Out")
    return redirect(url_for("login"))

@app.route("/register", methods=["GET", "POST"])
def register():
  if request.method == "POST":
        # check if username exists
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            flash("Username already exists")
            return redirect(url_for("register"))

        register = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(register)

        #put the new user into 'session' cookie
        session["user"] = request.form.get("username").lower()
        flash("Registration Successful")
        return redirect(url_for("profile", username=session["user"]))

  return render_template("register.html")


@app.route("/profile/<username>", methods=["GET", "POST"])
def profile(username):
    #get the session username from the database
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]
    #get their movies
    movies = list(mongo.db.movies.find({"added_by": username}))

    if session["user"]:
        return render_template("profile.html", username=username, movies=movies)

    return redirect(url_for("login"))



@app.route("/add_movie")
def add_movie():
  if session:
    return render_template("add_movie.html")
  
  flash("Please login or register first")
  return redirect(url_for("login"))

  


@app.route("/find_movie", methods=["GET", "POST"])
def find_movie():
  if request.method == "POST":
        movie = {
            "movie_name": request.form.get("movietitle"),
            "movie_year": request.form.get("movieyear"),
            "movie_image": request.form.get("movieimage"),
            "category_name": request.form.get("category_name"),
            "movie_actors": request.form.get("movieactors"),
            "movie_rating": 0,
            "added_by": session["user"]
        }
        if mongo.db.movies.count_documents({"movie_name": request.form.get("movietitle"), "movie_actors": request.form.get("movieactors")}) == 0:
          mongo.db.movies.insert_one(movie)
          flash("Movie added successfully")
          return redirect(url_for("get_movies"))
        else:
          flash("Movie already exists")
          return redirect(url_for("add_movie"))
  
  categories = mongo.db.categories.find().sort("category_name", 1)
  return render_template("find_movie.html", categories=categories)

@app.route("/edit_movie/<movie_id>", methods=["GET", "POST"])
def edit_movie(movie_id):
    if request.method == "POST":
        update = {
              "movie_name": request.form.get("movietitle"),
              "movie_year": request.form.get("movieyear"),
              "movie_image": request.form.get("movieimage"),
              "category_name": request.form.get("category_name"),
              "movie_actors": request.form.get("movieactors")
        }  
        mongo.db.movies.update_one(
          {"_id": ObjectId(movie_id)},
          { "$set": update })
        return redirect(url_for("profile", username=session["user"]))
        flash("Entry Successfully Updated")

    movie = mongo.db.movies.find_one({"_id": ObjectId(movie_id)}) 
    categories = mongo.db.categories.find().sort("category_name", 1)
    return render_template("edit_movie.html", movie=movie, categories=categories)


@app.route("/delete_movie/<movie_id>")
def delete_movie(movie_id):
    mongo.db.movies.remove({"_id": ObjectId(movie_id)})
    flash("Entry Deleted")
    return redirect(url_for("profile", username=session["user"]))

#app.run(host=os.getenv('IP', '0.0.0.0'), port=int(os.getenv('PORT', '8000')), debug=True)

if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)