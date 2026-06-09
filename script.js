/* =========================
   SIGNUP + LOGIN (INDEX PAGE)
========================= */

function showSignup(){
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

function showLogin(){
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function signup(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("signupEmail").value;
    let pass = document.getElementById("signupPassword").value;
    let confirm = document.getElementById("confirmPassword").value;

    if(pass !== confirm){
        alert("Passwords do not match");
        return;
    }

    localStorage.setItem("user", name);
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);

    alert("Account Created Successfully");

    window.location.href = "language.html";
}

function login(){

    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("email");
    let savedPass = localStorage.getItem("pass");

    if(email === savedEmail && pass === savedPass){
        alert("Login Successful");
        window.location.href = "language.html";
    } else {
        alert("Invalid Credentials");
    }
}

function forgotPassword(){
    let email = prompt("Enter your email:");
    alert("Password reset link sent to " + email);
}

function googleLogin(){
    alert("Google Login Successful (Demo)");
    window.location.href = "language.html";
}


/* =========================
   LANGUAGE SELECTION
========================= */

function selectLanguage(lang){

    localStorage.setItem("language", lang);

    alert("Language Selected: " + lang);

    window.location.href = "genre.html";
}


/* =========================
   GENRE SELECTION
========================= */

function selectGenre(genre){

    localStorage.setItem("genre", genre);

    alert("Genre Selected: " + genre);

    window.location.href = "movies.html";
}


/* =========================
   MOVIE DATABASE
========================= */

const movies = {

telugu: {
    Action: ["RRR","Baahubali","Pushpa","Salaar","Akhanda"],
    Comedy: ["Jathi Ratnalu","DJ Tillu","Venky","Ready","F2"],
    Romance: ["Geetha Govindam","Fidaa","Sita Ramam","Arya","Bommarillu"],
    Drama: ["Mahanati","Leader","Srimanthudu","Kanche","Jersey"],
    Thriller: ["Goodachari","Evaru","Hit","Drushyam","Kshanam"],
    Horror: ["Raju Gari Gadhi","Prema Katha Chitram","Anando Brahma","Bhoot","Masooda"],
    "Sci-Fi": ["Aditya 369","Project K","24","Tik Tik Tik","Antariksham"]
},

hindi: {
    Action: ["Pathaan","Jawan","War","URI","Singham"],
    Comedy: ["3 Idiots","Hera Pheri","Phir Hera Pheri","Stree","Golmaal"],
    Romance: ["DDLJ","Jab We Met","Rockstar","Veer Zaara","Aashiqui 2"],
    Drama: ["Dangal","Taare Zameen Par","Chhichhore","Pink","Article 15"],
    Thriller: ["Drishyam","Kahaani","Andhadhun","Special 26","Badla"],
    Horror: ["Stree","Raaz","Bhoothnath","Pari","1920"],
    "Sci-Fi": ["Koi Mil Gaya","Robot","Ra.One","PK","Cargo"]
},

english: {
    Action: ["Avengers","John Wick","Batman","Mission Impossible","Mad Max"],
    Comedy: ["Home Alone","The Mask","Ted","Superbad","Deadpool"],
    Romance: ["Titanic","Notebook","La La Land","Twilight","Me Before You"],
    Drama: ["Forrest Gump","The Green Mile","Fight Club","Shawshank","The Social Network"],
    Thriller: ["Inception","Shutter Island","Se7en","Gone Girl","Zodiac"],
    Horror: ["Conjuring","IT","Annabelle","Hereditary","Exorcist"],
    "Sci-Fi": ["Interstellar","Interstellar","Dune","Matrix","Avatar"]
},

tamil: {
    Action: ["Leo","Vikram","Kaithi","Master","Jailer"],
    Comedy: ["Vadivelu Movies","Boss Engira Bhaskaran","Remo","Soodhu Kavvum","Dhilluku Dhuddu"],
    Romance: ["96","Vinnaithaandi Varuvaayaa","OK Kanmani","Minnale","Love Today"],
    Drama: ["Asuran","Pariyerum Perumal","Jai Bhim","Visaranai","Karnan"],
    Thriller: ["Ratsasan","Thani Oruvan","Vikram Vedha","Anniyan","Dhuruvangal Pathinaaru"],
    Horror: ["Kanchana","Pizza","Darling","Aval","Demonte Colony"],
    "Sci-Fi": ["24","Tik Tik Tik","Indru Netru Naalai","Ayalaan","Enemy"]
},

malayalam: {
    Action: ["Lucifer","Aavesham","Bheeshma Parvam","RDX","Kurup"],
    Comedy: ["Premam","Bangalore Days","Ustad Hotel","Neram","Ohm Shanthi Oshaana"],
    Romance: ["Hridayam","Premam","June","Annayum Rasoolum","Charlie"],
    Drama: ["Drishyam","Kumbalangi Nights","The Great Indian Kitchen","Bangalore Days","Uyare"],
    Thriller: ["Drishyam 2","Anjaam Pathiraa","Memories","Mumbai Police","Forensic"],
    Horror: ["Ezra","Bhoothakaalam","Nine","Winter","Red Rain"],
    "Sci-Fi": ["Android Kunjappan","9","C U Soon","Antariksham","Project K"]
}

};


/* =========================
   LOAD MOVIES (movies.html)
========================= */

function loadMovies(){

    let lang = localStorage.getItem("language");
    let genre = localStorage.getItem("genre");

    let list = movies[lang][genre];

    document.getElementById("selectedInfo").innerText =
        `${lang.toUpperCase()} | ${genre}`;

    let container = document.getElementById("moviesContainer");

    container.innerHTML = "";

    list.forEach(movie => {

        let div = document.createElement("div");
        div.className = "movie-card";

        div.innerHTML = `
            <h3>${movie}</h3>
            <button onclick="selectMovie('${movie}')">
                Rate Movie
            </button>
        `;

        container.appendChild(div);
    });
}


/* =========================
   SELECT MOVIE
========================= */

function selectMovie(movie){

    localStorage.setItem("movie", movie);

    alert("Selected Movie: " + movie);

    window.location.href = "rating.html";
}


/* =========================
   RATING PAGE
========================= */

function submitRating(){

    let rating = document.getElementById("rating").value;

    let movie = localStorage.getItem("movie");

    alert("You rated " + movie + " ⭐ " + rating);

    window.location.href = "language.html";
}