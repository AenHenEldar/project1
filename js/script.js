/* jslint node: true */
"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(!numberOfFilms) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMoviesDB.count < 10 && personalMoviesDB.count) {
        alert('Просмотрено довольно мало фильмов');
    } else if(personalMoviesDB.count < 30 && personalMoviesDB.count) {
        alert('Вы классический зритель');
    } else if(personalMoviesDB.count >= 30 && personalMoviesDB.count) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMoviesDB);
    }
}

function writeYourGenres(genres) {
    for(let i = 0; i < 3; i++) {
        const genre = prompt(`Ваш любимый жанр по номером ${i + 1}`, "");
    
        if(genre && genre != "" && genre.length < 30) {
            genres[i] = genre;
        } else {
            console.log("error");
            i--;
        }
    }
}

writeYourGenres(personalMoviesDB.genres);

showMyDB(personalMoviesDB.privat);