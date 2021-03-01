#imports
import os
import logging
from flask import Flask, render_template, redirect, request, session, url_for, flash
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
if os.path.exists("env.py"):
    import env

app = Flask(__name__)

# Fetch configurations from env.py
app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

#Declare mongo as the route to the database
mongo = PyMongo(app)

# Home route, where the main movie list is utilised and a secondary random movie variable is used for fetching random movie entries from the database. 
@app.route("/")
@app.route("/get_movies", methods=["GET", "POST"])
def get_movies():
  movies = list(mongo.db.movies.find())
  random_movies = list(mongo.db.movies.aggregate(
    [ { '$sample': { 'size': 10 } } ]
  ))
    
  return render_template("movies.html", movies=movies, random_movies=random_movies)


# Upvoute route, taking the id of the movie and incrementing the movie_rating by one
@app.route('/upvote/<movie_id>', methods=["POST"])
def upvote(movie_id):
  
  mongo.db.movies.update_one({ "_id": ObjectId(movie_id) },
  {
    '$inc': { "movie_rating": 1 }
  }, upsert=False)
  return 'OK'

# Allow the user to use search.html to query the database entries. Returns a list of movies if successful or displays a message if not.
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

# Main login method
@app.route("/login", methods=["GET", "POST"])
def login():
  if request.method == "POST":
    #find the username
    existing_user = mongo.db.users.find_one(
      {"username": request.form.get("username").lower()}
    )
    #if username present, confirm password is correct
    if existing_user:
      if check_password_hash(
        existing_user["password"], request.form.get("password")):
          # set the session cookie to reflect the user's name
          session["user"] = request.form.get("username").lower()
          # display success to the user
          flash("Login Successful!")
          return redirect(url_for("manage_movies", username=session["user"] ))
      else:
        #invalid password flash message
        flash("Invalid Username or Password")
        return redirect(url_for("login")) 
    
    else:
      #username not in database
      flash("Invalid Username or Password")
      return redirect(url_for("login"))

  return render_template("login.html")

#main logout route, simply removes the user from the session cookie, effectively making them anyonymous
@app.route("/logout")
def logout():
    session.pop("user")
    flash("Logged Out")
    return redirect(url_for("login"))

# Used for first time registrations.
@app.route("/register", methods=["GET", "POST"])
def register():
  if request.method == "POST":
        # check if username or email exists
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})
        existing_email = mongo.db.users.find_one(
            {"email": request.form.get("email").lower()})
        #display error if username exists in the database
        if existing_user:
            flash("Username already exists")
            return redirect(url_for("register"))
        # display error if email is already used
        elif existing_email:
            flash("Email already exists")
            return redirect(url_for("register"))
        #Add form details to the database
        register = {
            "username": request.form.get("username").lower(),
            "email": request.form.get("email").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(register)

        #put the new user into 'session' cookie
        session["user"] = request.form.get("username").lower()
        flash("Registration Successful")
        return redirect(url_for("manage_movies", username=session["user"]))

  return render_template("register.html")

# Allow the user to view their added movies
@app.route("/manage_movies/<username>", methods=["GET", "POST"])
def manage_movies(username):
    #get the session username from the database
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]
    #get their movies
    movies = list(mongo.db.movies.find({"added_by": username}))

    if session["user"]:
        return render_template("manage_movies.html", username=username, movies=movies)

    return redirect(url_for("login"))

# Allow navidation to the add_movie page only if the user is logged in. Direct them to the login page if not.
@app.route("/add_movie")
def add_movie():
  if session:
    return render_template("add_movie.html")
  
  flash("Please login or register first")
  return redirect(url_for("login"))

# Take the form movie details and submit them to the database
@app.route("/find_movie", methods=["GET", "POST"])
def find_movie():
  if request.method == "POST":
        # Handle leaving a generic review if the user does not add one.
        if len(request.form.get("moviereview")) == 0:
          movie = {
              "movie_name": request.form.get("movietitle"),
              "movie_year": request.form.get("movieyear"),
              "movie_image": request.form.get("movieimage"),
              "category_name": request.form.get("category_name"),
              "movie_actors": request.form.get("movieactors"),
              "movie_rating": 0,
              "added_by": session["user"],
              "movie_review": "Didn't have much to say about it, but we're sure it's excellent!",
              "imdbID": request.form.get("imdbID")
          }
        #Otherwise add their review.
        else:
          movie = {
              "movie_name": request.form.get("movietitle"),
              "movie_year": request.form.get("movieyear"),
              "movie_image": request.form.get("movieimage"),
              "category_name": request.form.get("category_name"),
              "movie_actors": request.form.get("movieactors"),
              "movie_rating": 0,
              "added_by": session["user"],
              "movie_review": request.form.get("moviereview"),
              "imdbID": request.form.get("imdbID")
          }
        # Only add the movie if the name and main actors combination does not exist already in the database.
        if mongo.db.movies.count_documents({"movie_name": request.form.get("movietitle"), "movie_actors": request.form.get("movieactors")}) == 0:
          mongo.db.movies.insert_one(movie)
          flash("Movie added successfully")
          return redirect(url_for("get_movies"))
        else:
          flash("Movie already exists")
          return redirect(url_for("add_movie"))
  # Fetch the categories listings to load into the dropdown list.
  categories = mongo.db.categories.find().sort("category_name", 1)
  return render_template("find_movie.html", categories=categories)

#Take the form details and update the listing by movie id with the user's input.
@app.route("/edit_movie/<movie_id>", methods=["GET", "POST"])
def edit_movie(movie_id):
    if request.method == "POST":
        update = {
              "movie_name": request.form.get("movietitle"),
              "movie_year": request.form.get("movieyear"),
              "movie_image": request.form.get("movieimage"),
              "category_name": request.form.get("category_name"),
              "movie_actors": request.form.get("movieactors"),
              "movie_review": request.form.get("moviereview")
        }  
        mongo.db.movies.update_one(
          {"_id": ObjectId(movie_id)},
          { "$set": update })
        flash("Entry Successfully Updated")
        if session:
          return redirect(url_for("manage_movies", username=session["user"]))
        else:
          flash("Looks like you've been logged out. Please log in again.")
          redirect(url_for("login"))
        
    # Ensure the correct movie and category is used.
    movie = mongo.db.movies.find_one({"_id": ObjectId(movie_id)}) 
    categories = mongo.db.categories.find().sort("category_name", 1)
    return render_template("edit_movie.html", movie=movie, categories=categories)

# Remove the movie from the database using the movie id, and display success to the user.
@app.route("/delete_movie/<movie_id>")
def delete_movie(movie_id):
    mongo.db.movies.remove({"_id": ObjectId(movie_id)})
    flash("Entry Deleted")
    return redirect(url_for("manage_movies", username=session["user"]))

# Main route for displaying the sum of the held movie details via the 'More Details' links on the main and search page.
@app.route("/movie_details/<movie_id>")
def movie_details(movie_id):
  movie = mongo.db.movies.find_one({"_id": ObjectId(movie_id)})
  return render_template("movie_details.html", movie=movie)


# Important to ensure the application runs based on the registered environment settings.
if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=False)