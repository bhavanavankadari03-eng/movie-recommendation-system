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
name:"Pushpa",
lang:"telugu",
type:"Action",
poster:"https://upload.wikimedia.org/wikipedia/en/7/7e/Pushpa_poster.jpg"
},{
name:"Pushpa 2",
lang:"telugu",
type:"Action",
poster:"images/pushpa2.jpg"
},

{
name:"Kalki 2898 AD",
lang:"telugu",
type:"Sci-Fi",
poster:"images/kalki.jpg"
},

{
name:"Devara",
lang:"telugu",
type:"Action",
poster:"images/devara.jpg"
},

{
name:"Dune Part Two",
lang:"english",
type:"Sci-Fi",
poster:"images/dune2.jpg"
}
,
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
name:"Leo",
lang:"tamil",
type:"Action",
poster:"https://upload.wikimedia.org/wikipedia/en/7/7b/Leo_poster.jpg"
},
{
name:"Premam",
lang:"malayalam",
type:"Romance",
poster:"https://upload.wikimedia.org/wikipedia/en/5/5c/Premam_poster.jpg"
}
];

// LOAD MOVIES BASED ON SELECTION
function loadMovies(){

let lang = localStorage.getItem("lang");
let type = localStorage.getItem("type");

let filtered = movies.filter(m =>
  m.lang === lang && m.type === type
);

let box = document.getElementById("movies");

filtered.forEach(m => {

let div = document.createElement("div");
div.className = "card";

div.innerHTML = `
  <img src="${m.poster}">
  <h3>${m.name}</h3>
  <button onclick="rate('${m.name}')">Rate</button>
`;

box.appendChild(div);

});

}

// GO TO RATING PAGE
function rate(name){
  localStorage.setItem("movie", name);
  window.location.href = "rating.html";
}

// SHOW MOVIE NAME
if(document.getElementById("movieName")){
  document.getElementById("movieName").innerText =
  localStorage.getItem("movie");
}

// SUBMIT RATING
function submit(){
  let r = document.getElementById("rating").value;

  alert("Rated " + localStorage.getItem("movie") + " : " + r);

  window.location.href = "language.html";
}