let selectedLang = "";
let selectedType = "";
let currentMovie = "";

// LOGIN
function login() {
  let email = document.getElementById("email").value;

  if (email) {
    document.getElementById("loginPage").classList.remove("active");
    document.getElementById("appPage").classList.add("active");
  } else {
    alert("Enter email");
  }
}

// FAKE GOOGLE LOGIN
function googleLogin() {
  alert("Google Login Successful (Demo)");
  document.getElementById("loginPage").classList.remove("active");
  document.getElementById("appPage").classList.add("active");
}

// FORGOT PASSWORD
function forgotPassword() {
  let email = prompt("Enter your email:");
  if (email) {
    alert("Password reset link sent to " + email);
  }
}

// LANGUAGE SELECT
function selectLang(lang) {
  selectedLang = lang;
  alert("Selected Language: " + lang);
}

// TYPE SELECT
function selectType(type) {
  selectedType = type;
  showMovies();
}

// MOVIE DATABASE
const movies = [
  { name: "RRR", lang: "Telugu", type: "Action" },
  { name: "Baahubali", lang: "Telugu", type: "Action" },
  { name: "3 Idiots", lang: "Hindi", type: "Comedy" },
  { name: "Dangal", lang: "Hindi", type: "Drama" },
  { name: "Avengers", lang: "English", type: "Action" },
  { name: "Titanic", lang: "English", type: "Romance" },
  { name: "Vikram", lang: "Tamil", type: "Action" },
  { name: "Premam", lang: "Malayalam", type: "Romance" }
];

// SHOW MOVIES
function showMovies() {
  let container = document.getElementById("movies");
  container.innerHTML = "";

  let filtered = movies.filter(m =>
    m.lang === selectedLang && m.type === selectedType
  );

  filtered.forEach(movie => {
    let div = document.createElement("div");
    div.className = "movie";
    div.innerHTML = movie.name;

    div.onclick = () => openRating(movie.name);

    container.appendChild(div);
  });
}

// OPEN RATING
function openRating(name) {
  currentMovie = name;
  document.getElementById("selectedMovie").innerText = name;

  document.getElementById("ratingSection").scrollIntoView();
}

// SUBMIT RATING
function submitRating() {
  let rating = document.getElementById("rating").value;

  alert("You rated " + currentMovie + " : " + rating + " stars");
}