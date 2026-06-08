let lang = "";
let type = "";
let selectedMovie = "";

// MOVIE DATABASE (expandable / API ready)
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
}
];

// LANGUAGE SELECT
function setLang(l){
  lang = l;

  document.getElementById("langSection").classList.add("hidden");
  document.getElementById("typeSection").classList.remove("hidden");
}

// TYPE SELECT
function setType(t){
  type = t;

  document.getElementById("typeSection").classList.add("hidden");
  document.getElementById("movieSection").classList.remove("hidden");

  showMovies();
}

// SHOW MOVIES
function showMovies(){
  let container = document.getElementById("movies");
  container.innerHTML = "";

  let filtered = movies.filter(m =>
    m.lang === lang && m.type === type
  );

  filtered.forEach(movie => {

    let div = document.createElement("div");
    div.className = "movie-card";

    div.innerHTML = `
      <img src="${movie.poster}">
      <h4>${movie.name}</h4>
      <button onclick="rateMovie('${movie.name}')">Select</button>
    `;

    container.appendChild(div);
  });
}

// OPEN RATING
function rateMovie(name){
  selectedMovie = name;

  document.getElementById("movieTitle").innerText = name;

  document.getElementById("movieSection").classList.add("hidden");
  document.getElementById("ratingSection").classList.remove("hidden");
}

// SUBMIT RATING + RESET FLOW
function submitRating(){
  let r = document.getElementById("rating").value;

  // reset UI smoothly
  document.getElementById("ratingSection").classList.add("hidden");
  document.getElementById("langSection").classList.remove("hidden");

  // reset selections
  lang = "";
  type = "";
  selectedMovie = "";
}