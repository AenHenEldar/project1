/* jslint node: true */
"use strict";

const personalMoviesDB = {
    count: false,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        while(!personalMoviesDB.count) {
            personalMoviesDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if(personalMoviesDB.count < 10 && personalMoviesDB.count) {
            alert('Просмотрено довольно мало фильмов');
        } else if(personalMoviesDB.count < 30 && personalMoviesDB.count) {
            alert('Вы классический зритель');
        } else if(personalMoviesDB.count >= 30 && personalMoviesDB.count) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMoviesDB);
        }
    },
    toggleVisibleMyDB: function(hidden) {
        personalMoviesDB.privat = !hidden;
    },
    writeYourGenres: function(genres) {
        for(let i = 0; i < 3; i++) {
            const genre = prompt(`Ваш любимый жанр по номером ${i + 1}`, "");
        
            if(genre && genre != "" && genre.length < 30) {
                genres[i] = genre;
            } else {
                console.log("error");
                i--;
            }
        }
        genres.forEach((value, i) => {
            console.log(`Любимый жанр ${i + 1} - ${value}`);
        });
    }    
};

personalMoviesDB.start();
personalMoviesDB.rememberMyFilms();
personalMoviesDB.detectPersonalLevel();
personalMoviesDB.writeYourGenres(personalMoviesDB.genres);
personalMoviesDB.toggleVisibleMyDB(personalMoviesDB.privat);
personalMoviesDB.showMyDB(personalMoviesDB.privat);