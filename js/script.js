const answer = prompt(`сколько фильмов вы уже посмотреи ?`,"");
console.log(answer);

const removies = prompt("Один из последних просмотренных фильмов?", "");
const reitig = prompt('На сколько оцените его?', '');


const personalMovieDB = {
    count:[answer],
    movies:{ removies, reitig },
    actors:{},
    genres:[],
    privat: false
};
console.log(personalMovieDB);


