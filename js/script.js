/* jslint node: true */
"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++) {
    const movie = prompt("Один из последних просмотренных фильмов?", ""),
          movieRate = +prompt("На сколько оцените его?", "");

    if(movie && movieRate && movie != "" && movie.length < 50) {
        personalMoviesDB.movies[movie] = movieRate;
    } else {
        console.log("error");
        i--;
    }
    
}

if(personalMoviesDB.count < 10 && personalMoviesDB.count) {
    alert('Просмотрено довольно мало фильмов');
} else if(personalMoviesDB.count < 30 && personalMoviesDB.count) {
    alert('Вы классический зритель');
} else if(personalMoviesDB.count >= 30 && personalMoviesDB.count) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMoviesDB);