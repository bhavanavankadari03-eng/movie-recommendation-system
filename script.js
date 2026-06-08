const movies = [
{
title:"Inception",
genres:["Sci-Fi","Action"]
},
{
title:"Interstellar",
genres:["Sci-Fi","Drama"]
},
{
title:"The Dark Knight",
genres:["Action","Crime"]
},
{
title:"Avengers",
genres:["Action","Sci-Fi"]
},
{
title:"Titanic",
genres:["Romance","Drama"]
},
{
title:"Joker",
genres:["Crime","Drama"]
},
{
title:"The Matrix",
genres:["Sci-Fi","Action"]
},
{
title:"John Wick",
genres:["Action","Crime"]
},
{
title:"La La Land",
genres:["Romance","Drama"]
},
{
title:"Doctor Strange",
genres:["Action","Sci-Fi"]
}
];

const movieList = document.getElementById("movieList");
const recommendations = document.getElementById("recommendations");

function loadMovies(){

movies.forEach((movie,index)=>{

const card = document.createElement("div");
card.className = "movie-card";

card.innerHTML = `
<div class="movie-info">
<h3>${movie.title}</h3>
<p class="genre">${movie.genres.join(", ")}</p>
</div>

<select id="rating-${index}">
<option value="0">Not Rated</option>
<option value="1">1 ⭐</option>
<option value="2">2 ⭐</option>
<option value="3">3 ⭐</option>
<option value="4">4 ⭐</option>
<option value="5">5 ⭐</option>
</select>
`;

movieList.appendChild(card);

});

}

loadMovies();

document
.getElementById("recommendBtn")
.addEventListener("click", generateRecommendations);

function generateRecommendations(){

let likedGenres = {};

movies.forEach((movie,index)=>{

const rating =
parseInt(
document.getElementById(`rating-${index}`).value
);

if(rating >= 4){

movie.genres.forEach(genre=>{

likedGenres[genre] =
(likedGenres[genre] || 0) + rating;

});

}

});

let recommendationScores = [];

movies.forEach((movie,index)=>{

const rating =
parseInt(
document.getElementById(`rating-${index}`).value
);

if(rating === 0){

let score = 0;

movie.genres.forEach(genre=>{

score += likedGenres[genre] || 0;

});

if(score > 0){

recommendationScores.push({
title: movie.title,
genres: movie.genres,
score: score
});

}

}

});

recommendationScores.sort(
(a,b)=>b.score-a.score
);

displayRecommendations(
recommendationScores
);

}

function displayRecommendations(recommended){

recommendations.innerHTML = "";

if(recommended.length===0){

recommendations.innerHTML =
"<p>No recommendations yet. Rate some movies with 4 or 5 stars.</p>";

return;
}

recommended.forEach(movie=>{

const div = document.createElement("div");

div.className = "recommend-card";

div.innerHTML = `
<h3>${movie.title}</h3>
<p>${movie.genres.join(", ")}</p>
<p class="score">
Recommendation Score: ${movie.score}
</p>
`;

recommendations.appendChild(div);

});

}