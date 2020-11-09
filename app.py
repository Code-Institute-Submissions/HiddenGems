import os
from flask import Flask, render_template, redirect


app = Flask(__name__)


@app.route("/")
def index():
  return render_template("base.html")



app.run(host=os.getenv('IP', '0.0.0.0'), port=int(os.getenv('PORT', '8000')), debug=True)

#if __name__ == "__main__":
#    app.run(host=os.environ.get("IP"),
#            port=int(os.environ.get("PORT")),
#            debug=False)