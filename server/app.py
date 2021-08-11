from flask import Flask, request
from model import get_movie_recommendation

app = Flask(__name__)

@app.route("/recommend/")
def home():
    movie = request.args.get("movie")
    lst = get_movie_recommendation(movie)
    print(lst)
    return movie

app.run(debug=True)