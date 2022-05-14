"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null ||  isNaN(numberOfFilms) ) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");
        
    }
}
start();


const personalMovieDB = {
    count:[numberOfFilms],
    movies:{},
    actors:{},    
    genres:[],
    privat: false 
};


// --------------как сделал я! 
// function showMyDB () {
//     if(personalMovieDB.privat == false){
//        console.log(personalMovieDB, ' ну пизда');
//        console.log(' ya ne ebu');
//     }else {
//         console.log(' что-то не так? верни как было пидор ');
//     }
// } 
// showMyDB();
// function writeYourGenres() {
    
    
    // for (let i = 1; i < 2; i++) {
    //     const a = prompt("Ваш любимый жанр под номером 1"),
    //     b = prompt("Ваш любимый жанр под номером 2"),
    //     c = prompt("Ваш любимый жанр под номером 3");
    //     return ( personalMovieDB.genres[a]= '', personalMovieDB.genres[b]= c);
        
    //     //       if (a != null && b != null && c != null && a != '' && b != '' && c != '' && a.length >10 ) {
    //         //     personalMovieDB.genres= a,b,c ;
    //         // }else {
    //             //     i--;
    //             // }
    //         }
            
            
            
            
    //     }
    //     writeYourGenres();
        
        // конец моего кода 
        function remeberMyFilms() {
    
    for (let i = 0; i < 2; i++) {
       const a = prompt('Один из последних просмотренных фильмов?', ''),
             b = prompt('На сколько оцените его?',"");
       
       if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
           personalMovieDB.movies[a] = b;
           console.log("nays baby");
        }else{
            i--;
        }
    }
 
}
remeberMyFilms();


console.log(personalMovieDB);
function detectPersonalLevel() {
    
    // проверка на киномана
    if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
        console.log('Просмотрено довольно мало фильмов' );    
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    }
    console.log(personalMovieDB.count);

}
detectPersonalLevel();    
    
function showMyDB (hidden) {
if (!hidden) {
   console.log(personalMovieDB);
}

}
showMyDB(personalMovieDB.privat);
function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1]= prompt (`Ваш любимый жанр под номером ${i}`);
    } 
}
writeYourGenres();




















// конец первого способоа
// // второй спосб цыкла 
// let i = 0; 
// while (i <2 ) {
    
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?',"");
//           i++;
          
//          if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//             console.log("nays baby");
//          }else{
//              i--;
//          }
//          personalMovieDB.movies[a] = b;
          
// }
// console.log(personalMovieDB);
// конце второго цыкла
// //третий способ цыкла " терации"
// let i = 0; 
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     i++;
//     if (a != null && b !=null && a != '' && b != '' && a.length < 50 ) {
//         console.log('хорошо блэт ');
//     } else { 
//         i--;
//     }
//     personalMovieDB.movies[a] = b;
// } while (i < 2);
// console.log(personalMovieDB);
// конец третей итерации. 
