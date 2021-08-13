from flask import Flask, request, jsonify
from model import get_movie_recommendation
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/recommend/")
@cross_origin()
def home():
    movie = request.args.get("movie")
    movies_df = get_movie_recommendation(movie)
    movies_lst = movies_df['Title'].values.tolist()
    return jsonify({ 'movies': movies_lst })

app.run(debug=True)