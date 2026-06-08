let lang = "";
let type = "";
let selectedMovie = "";

// LOGIN (if you still use login page)
function login(){
  let email = document.getElementById("email").value;

  if(email){
    alert("Login Successful ✔ Welcome " + email);
    window.location.href = "home.html";
  } else {
    alert("Please enter email");
  }
}

// LANGUAGE SELECT
function setLang(l){
  lang = l;

  alert("Language Selected: " + lang);

  document.getElementById("langSection").classList.add("hidden");
  document.getElementById("typeSection").classList.remove("hidden");
}

// TYPE SELECT
function setType(t){
  type = t;

  alert("Movie Type Selected: " + type);

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

// MOVIE SELECT
function rateMovie(name){
  selectedMovie = name;

  alert("Movie Selected: " + selectedMovie);

  document.getElementById("movieTitle").innerText = name;

  document.getElementById("movieSection").classList.add("hidden");
  document.getElementById("ratingSection").classList.remove("hidden");
}

// SUBMIT RATING
function submitRating(){
  let r = document.getElementById("rating").value;

  alert("You rated " + selectedMovie + " : " + r + " ⭐");

  // RESET FLOW
  document.getElementById("ratingSection").classList.add("hidden");
  document.getElementById("langSection").classList.remove("hidden");

  lang = "";
  type = "";
  selectedMovie = "";
}