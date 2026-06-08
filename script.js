let selectedType = "";
let selectedMovie = "";

// BIG MOVIE DATABASE (can expand / later replace with API)
const movies = [
{
name:"RRR",
lang:"telugu",
type:"Action",
poster:"https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
},
{
name:"Baahubali",
lang:"telugu",
type:"Action",
poster:"https://upload.wikimedia.org/wikipedia/en/7/7e/Baahubali_poster.jpg"
},
{
name:"3 Idiots",
lang:"hindi",
type:"Comedy",
poster:"https://upload.wikimedia.org/wikipedia/en/5/5f/3_Idiots_poster.jpg"
},
{
name:"Dangal",
lang:"hindi",
type:"Drama",
poster:"https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg"
},
{
name:"Avengers Endgame",
lang:"english",
type:"Action",
poster:"https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
},
{
name:"Titanic",
lang:"english",
type:"Romance",
poster:"https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg"
},
{
name:"Vikram",
lang:"tamil",
type:"Action",
poster:"https://upload.wikimedia.org/wikipedia/en/7/78/Vikram_2022_poster.jpg"
},
{
name:"Premam",
lang:"malayalam",
type:"Romance",
poster:"https://upload.wikimedia.org/wikipedia/en/5/5c/Premam_poster.jpg"
}
];

// FILTER LANGUAGE
let lang = localStorage.getItem("lang");

function setType(type){
  selectedType = type;
  showMovies();
}

// SHOW MOVIES
function showMovies(){

let container = document.getElementById("movies");
container.innerHTML = "";

let filtered = movies.filter(m =>
  m.lang === lang && m.type === selectedType
);

filtered.forEach(movie => {

let div = document.createElement("div");
div.className = "movie-card";

div.innerHTML = `
<img src="${movie.poster}">
<h3>${movie.name}</h3>
<button onclick="openRating('${movie.name}')">Rate</button>
`;

container.appendChild(div);

});

}

// OPEN RATING
function openRating(name){
  selectedMovie = name;

  document.getElementById("movieName").innerText = name;
  document.getElementById("ratingBox").style.display = "block";
}

// RATE MOVIE
function rateMovie(){
  let r = document.getElementById("rating").value;
  alert("You rated " + selectedMovie + " : " + r + " ⭐");
}