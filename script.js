/* LOGIN */
function showSignup(){
    document.getElementById("loginForm").style.display="none";
    document.getElementById("signupForm").style.display="block";
}

function showLogin(){
    document.getElementById("signupForm").style.display="none";
    document.getElementById("loginForm").style.display="block";
}

function signup(){
    localStorage.setItem("email", document.getElementById("signupEmail").value);
    localStorage.setItem("pass", document.getElementById("signupPassword").value);

    alert("Account Created");
    window.location.href="language.html";
}

function login(){
    let e=document.getElementById("loginEmail").value;
    let p=document.getElementById("loginPassword").value;

    if(e===localStorage.getItem("email") && p===localStorage.getItem("pass")){
        alert("Login Success");
        window.location.href="language.html";
    } else {
        alert("Invalid Login");
    }
}

function googleLogin(){
    alert("Google Login Success (demo)");
    window.location.href="language.html";
}

/* LANGUAGE */
function selectLanguage(lang){
    localStorage.setItem("language", lang.toLowerCase());
    window.location.href="genre.html";
}

/* GENRE */
function selectGenre(genre){
    localStorage.setItem("genre", genre);
    window.location.href="movies.html";
}

/* MOVIE DATABASE (FIXED KEYS) */
const movies = {
telugu:{
Action:["RRR","Baahubali","Pushpa","Salaar","Akhanda"],
Comedy:["Jathi Ratnalu","DJ Tillu","F2","Venky","Ready"],
Romance:["Geetha Govindam","Fidaa","Sita Ramam","Arya","Bommarillu"],
Drama:["Mahanati","Jersey","Srimanthudu","Kanche","Leader"],
Thriller:["Hit","Evaru","Goodachari","Kshanam","Drushyam"],
Horror:["Masooda","Raju Gari Gadhi","Anando Brahma","Bhoot","Prema Katha"],
"Sci-Fi":["Aditya 369","24","Antariksham","Project K","Tik Tik Tik"]
},

hindi:{
Action:["Pathaan","Jawan","War","URI","Singham"],
Comedy:["3 Idiots","Hera Pheri","Stree","Golmaal","Phir Hera Pheri"],
Romance:["DDLJ","Jab We Met","Rockstar","Aashiqui 2","Veer Zaara"],
Drama:["Dangal","Taare Zameen Par","Chhichhore","Pink","Article 15"],
Thriller:["Drishyam","Andhadhun","Kahaani","Badla","Special 26"],
Horror:["Stree","Raaz","Pari","1920","Bhootnath"],
"Sci-Fi":["Robot","Koi Mil Gaya","Ra.One","PK","Cargo"]
},

english:{
Action:["Avengers","John Wick","Batman","Mad Max","Mission Impossible"],
Comedy:["Deadpool","Ted","Superbad","Home Alone","The Mask"],
Romance:["Titanic","Notebook","La La Land","Twilight","Me Before You"],
Drama:["Forrest Gump","Shawshank","Joker","Fight Club","Green Mile"],
Thriller:["Inception","Se7en","Gone Girl","Shutter Island","Zodiac"],
Horror:["Conjuring","IT","Annabelle","Hereditary","Exorcist"],
"Sci-Fi":["Interstellar","Inception","Dune","Matrix","Avatar"]
},

tamil:{
Action:["Leo","Vikram","Kaithi","Master","Jailer"],
Comedy:["Remo","Vadivelu Hits","Soodhu Kavvum","Dhilluku Dhuddu","Boss Engira"],
Romance:["96","VTV","OK Kanmani","Minnale","Love Today"],
Drama:["Asuran","Jai Bhim","Karnan","Visaranai","Pariyerum"],
Thriller:["Ratsasan","Thani Oruvan","Vikram Vedha","Anniyan","Dhuruvangal"],
Horror:["Pizza","Kanchana","Aval","Demonte Colony","Darling"],
"Sci-Fi":["24","Tik Tik Tik","Ayalaan","Enemy","Indru Netru"]
},

malayalam:{
Action:["Lucifer","Aavesham","RDX","Kurup","Bheeshma"],
Comedy:["Premam","Bangalore Days","Ustad Hotel","Neram","Ohm Shanthi"],
Romance:["Hridayam","June","Charlie","Premam","Annayum"],
Drama:["Drishyam","Kumbalangi Nights","Uyare","The Great Indian Kitchen","Bangalore Days"],
Thriller:["Drishyam 2","Anjaam Pathiraa","Memories","Forensic","Mumbai Police"],
Horror:["Ezra","Bhoothakaalam","Nine","Winter","Red Rain"],
"Sci-Fi":["Android Kunjappan","9","C U Soon","Antariksham","Project K"]
}
};

/* LOAD MOVIES (FIXED SAFE VERSION) */
function loadMovies(){

let lang=localStorage.getItem("language");
let genre=localStorage.getItem("genre");

if(!movies[lang] || !movies[lang][genre]){
    document.getElementById("moviesContainer").innerHTML="No movies found";
    return;
}

let list=movies[lang][genre];

document.getElementById("selectedInfo").innerText=
lang.toUpperCase()+" - "+genre;

let container=document.getElementById("moviesContainer");
container.innerHTML="";

list.forEach(m=>{

let div=document.createElement("div");
div.className="movie-card";

div.innerHTML=`
<h3>${m}</h3>
<button onclick="selectMovie('${m}')">Rate</button>
`;

container.appendChild(div);

});

}

/* SELECT MOVIE */
function selectMovie(m){
localStorage.setItem("movie",m);
window.location.href="rating.html";
}

/* RATING */
function submitRating(){
alert("Rated "+localStorage.getItem("movie")+" ⭐ "+document.getElementById("rating").value);
window.location.href="language.html";
}