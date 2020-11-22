import os
from flask import Flask, render_template, redirect, request, session, url_for
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
  if request.method == "POST":
    #movieid = request.form.get("movie-input")
    # submit = {
    #         "movie_rating": 1
    #     } 
    mongo.db.movies.update({ "_id": ObjectId("5fbaba3e9303b46da9a73a79") },
   {
      '$inc': { "movie_rating": 1 }
   })
    
  return render_template("movies.html", movies=movies)



# @app.route('/upvote/<post_id>', methods=["GET", "POST"])
# def upvote(post_id):
#     print('%s upvoted' % post_id)
#     # do your db update here and return a json encoded object
#     #current_val = mongo.db.movies.find_one("_id": post_id)
#     submit = {
#             "movie_rating": "1"
#         } 
#     mongo.db.movies.update({"_id": ObjectId(post_id)}, submit)


# @app.route('/upvote', methods=['POST'])
# def upvote_post():
#     if request.method == "POST":

#         data_received = json.loads(request.data) 
        
#         post= mongo.db.movies.find_one(
#       {"_id": data_received['postid'].first()}
#     )
        
#         if post:
#             mongo.db.update({
#               "_id": ObjectId(post._id)
#             },
#             {
#               "$inc": { "movie_rating": 1 }
#             })
                 
#             return json.dumps({'status' : 'success'})
#         return json.dumps({'status' : 'no post found'})
#     return redirect(url_for('index'))


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
          return redirect(url_for("profile", username=session["user"] ))
      else:
        #invalid password#flash message
        print("invalid password")
        return redirect(url_for("login")) 
    
    else:
      #username not in database
      print("invalid username")
      return redirect(url_for("login"))

  return render_template("login.html")


#logout

@app.route("/register", methods=["GET", "POST"])
def register():
  if request.method == "POST":
        # check if username exists
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            print("Username already exists")
            return redirect(url_for("register"))

        register = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        mongo.db.users.insert_one(register)

        #put the new user into 'session' cookie
        session["user"] = request.form.get("username").lower()
        print("Registration Successful")
        return redirect(url_for("profile", username=session["user"]))

  return render_template("register.html")


@app.route("/profile/<username>", methods=["GET", "POST"])
def profile(username):
    #get the session username from the database
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]

    if session["user"]:
        return render_template("profile.html", username=username)

    return redirect(url_for("login"))



@app.route("/add_movie")
def add_movie():
  return render_template("add_movie.html")


@app.route("/find_movie", methods=["GET", "POST"])
def find_movie():
  if request.method == "POST":
        movie = {
            "movie_name": request.form.get("movietitle"),
            "movie_year": request.form.get("movieyear"),
            "movie_image": request.form.get("movieimage"),
            "category_name": request.form.get("category_name"),
            "movie_actors": request.form.get("movieactors") 
        }
        mongo.db.movies.insert_one(movie)
        return redirect(url_for("get_movies"))
  
  categories = mongo.db.categories.find().sort("category_name", 1)
  return render_template("find_movie.html", categories=categories)



#app.run(host=os.getenv('IP', '0.0.0.0'), port=int(os.getenv('PORT', '8000')), debug=True)

if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)