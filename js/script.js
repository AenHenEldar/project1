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

let movie = prompt("Один из последних просмотренных фильмов?", "");
let movieRate = prompt("На сколько оцените его?", "");

personalMoviesDB.movies[movie] = movieRate;

movie = prompt("Один из последних просмотренных фильмов?", "");
movieRate = prompt("На сколько оцените его?", "");

personalMoviesDB.movies[movie] = movieRate;

console.log(personalMoviesDB);