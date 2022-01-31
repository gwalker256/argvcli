// console.log(process.argv);

const movieArr = [];

class Movie {
  constructor(title, actor, genre = "Not specified") {
    this.title = title;
    this.actor = actor;
    this.genre = genre;
  }

  add() {
    movieArr.push(this);
  }
}

module.exports = { Movie, movieArr };
