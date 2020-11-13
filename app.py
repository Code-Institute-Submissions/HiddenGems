import os
from flask import Flask, render_template, redirect, request, session, url_for
from flask_pymongo import PyMongo
if os.path.exists("env.py"):
    import env

app = Flask(__name__)


app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


@app.route("/")
@app.route("/get_movies")
def get_movies():
  movies = mongo.db.movies.find()
  return render_template("movies.html", movies=movies)


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