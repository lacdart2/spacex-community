// iss api
const issData = document.querySelector(".issContent");
const url = "https://api.wheretheiss.at/v1/satellites/25544";

/* console.log(url); */

async function issPosition() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    // self check log console
    console.log(details);
    console.log(details.name);
    console.log(details.longitude);

    issData.innerHTML = "";

    issData.innerHTML += `<div class="iss-data">           
            <p>name: ${details.name} </p>     
            <P>latitude:${details.latitude}</p>
            <p>longitude:${details.longitude}</p>
            <p>altitude:${details.altitude}</p>
            <button class="live-btn"><a target="_blank"  href ="https://ustream.tv/channel/9408562">Live Stream</a></button><div>`;
    /*       } */
  } catch (error) {
    console.log("error : failed to call iss iss API ");
    issData.innerHTML = `<p>An error occurred when calling the API :( </p>`;
  }
}

issPosition();

// mars api

const marsData = document.querySelector(".marsContent");
const marsUrl = "https://api.maas2.apollorion.com/";

/* console.log(url); */

async function marsPosition() {
  try {
    const response = await fetch(marsUrl);
    const details = await response.json();
    // self check log console
    console.log(details);

    /* createHtml(details); */
    marsData.innerHTML = "";

    marsData.innerHTML += `<div class="mars-data">           
            <p>season: ${details.season}    </p>     
            <P>min-temp: ${details.min_temp}</p>
            <p>max-temp: ${details.max_temp}</p>
            <p>pressure: ${details.pressure}</p>
            <p>opacity: ${details.atmo_opacity}</p>
                                          <div>`;
  } catch (error) {
    console.log("error : failed to call mars REST API ");
    moonData.innerHTML = `<p>An error occurred when calling the API :( </p>`;
  }
}

marsPosition();

// jupiter api

const jupiterData = document.querySelector(".jupiterContent");
const jupiterUrl = "https://api.le-systeme-solaire.net/rest/bodies/jupiter";

async function jupiterPosition() {
  try {
    const response = await fetch(jupiterUrl);
    const details = await response.json();
    // self check log console
    console.log(details);

    /* createHtml(details); */
    jupiterData.innerHTML = "";

    jupiterData.innerHTML += `<div class="jupiter-data">           
            <p>name: ${details.name}</p>     
            <P>moons: ${details.moons.length}</p>
            <p>mass: ${details.mass.massValue}</p>
            <p>density: ${details.density}</p>
            <p>gravity: ${details.gravity}</p>
                                          <div>`;
  } catch (error) {
    console.log("error : failed to call jupiter  API ");
    jupiterData.innerHTML = `<p>An error occurred when calling the API :( </p>`;
  }
}

jupiterPosition();

// saturn api

const saturnData = document.querySelector(".saturnContent");
const saturnUrl = "https://api.le-systeme-solaire.net/rest/bodies/saturne";

async function saturnPosition() {
  try {
    const response = await fetch(saturnUrl);
    const details = await response.json();
    // self check log console
    console.log(details);

    /* createHtml(details); */
    saturnData.innerHTML = "";

    saturnData.innerHTML += `<div class="saturn-data">           
            <p>name: ${details.name}</p>     
            <P>moons: ${details.moons.length}</p>
            <p>mass: ${details.mass.massValue}</p>
            <p>density: ${details.density}</p>
            <p>gravity: ${details.gravity}</p>
                                          <div>`;
  } catch (error) {
    console.log("error : failed to call saturn REST API ");
    saturnData.innerHTML = `<p>An error occurred when calling the API :( </p>`;
  }
}

saturnPosition();

// nav background color changing on scroll :

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  /*     let logoColor = document.querySelector("logo-container"); */
  let windowPosition = window.scrollY > 0;
  console.log(scroll);

  header.classList.toggle("scroll-nav", windowPosition > 0);
  /*    logoColor.classList.toggle("logo-black", window.scrollY > 50); */
});

let header = document.querySelector("header");
let hamburgerMenu = document.querySelector(".hamburger-menu");
/* 
hamburger.addEventListener("click", function() {
    header.classlist.toggle(".menu-open");
}); */

// from index.js

/*  form validation js*/

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const emailRecovery = document.getElementById("emailRecovery");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  console.log("hello");
});

function checkInputs() {
  // trim for white space
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "you must enter Username");
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, "you must enter your email");
  } else if (!correctEmail(emailValue)) {
    setErrorFor(email, "email is not valid");
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password, "you must enter password");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "you must confirm your password");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function correctEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// nav background color changing on scroll :

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");

  /*     let logoColor = document.querySelector("logo-container"); */
  let windowPosition = window.scrollY > 0;

  header.classList.toggle("scroll-nav", windowPosition > 0);
  /*    logoColor.classList.toggle("logo-black", window.scrollY > 50); */
});

let header = document.querySelector("header");
let hamburgerMenu = document.querySelector(".hamburger-menu");
/* 
hamburger.addEventListener("click", function() {
    header.classlist.toggle(".menu-open");
}); */

//// put it back to test.js

/*******launches slider********/

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const autoSlide = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button events

next.addEventListener("click", (e) => {
  nextSlide();
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (autoSlide) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (autoSlide) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

/****************************  watch latest launche  api */

const latestLaunch = document.querySelector(".launches-content");
const latestUrl = "https://api.spacexdata.com/v4/launches/";

console.log(launchesUrl);

async function latestLaunche() {
  try {
    const response = await fetch(latestUrl);
    const data = await response.json();

    latestLaunch.innerHTML = "";

    for (i = 0; i < data.length; i++) {
      if (data[i].upcoming === false) {
        latestLaunch.innerHTML += `<div class="launche-data"> 
            <div class="launch-data-section">
               <h3>mission: ${data[i].name} </h3>  
                <p>date:${data[i].date_utc}</p>
           </div>
          <div class="launch-data-section">
                <p>static fire testing: ${data[i].static_fire_date_utc}</p>
                <p>mission details: ${data[i].details}</p>           
                <p>success: ${data[i].success}</p>
                <p> reused : ${data[i].reused}</p>
                <p>read more <i class="fas fa-long-arrow-alt-right"></i>
                <a target="_blank" href="${data[i].links.wikipedia}">wikipedia</a></P>              
             </div> 
                           <div> `;
      }
    }
  } catch (error) {
    console.log("error : failed to call launches API ");
    launches.innerHTML = `<p>An error occurred when calling the API :( </p>`;
  }
}
spacexlaunches();

/****************************  end watch latest launche  api */

/* let header = document.querySelector("header");
let hamburgerMenu = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", function() {
    header.classlist.toggle(".menu-open");
}); */

/* function setNewImage() {
    document.getElementById("event1");
    document.getElementById("image1").src = "images/Spacex-community-Logo.svg";
}

function setOldImage() {
    document.getElementById("image1").src = "images/aspacex-factory.jpg";
} */

/* const event1 = document.getElementById("event1");
const image = document.getElementById("image1")
event1.addEventListener("click", function () {
  image.style.visbility = "visible";
} */
