/* navigation background color changing on scroll */

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");

  let windowPosition = window.scrollY > 0;

  header.classList.toggle("scroll-nav", windowPosition > 0);
});
/****************************   latest launches api */

const launches = document.querySelector(".launches-content");
const launches2 = document.querySelector(".launches-content2");
const launches3 = document.querySelector(".launches-content3");
const launches4 = document.querySelector(".launches-content4");
const launchesUrl = "https://api.spacexdata.com/v4/launches/";

console.log(launchesUrl);

async function spacexlaunches() {
  try {
    const response = await fetch(launchesUrl);
    const data = await response.json();
    console.log(data);
    launches.innerHTML = "";

    for (i = 0; i < data.length; i++) {
      if (data[i].upcoming === false) {
        if (i === 6) {
          break;
        }

        launches.innerHTML += `<div class="launche-data"> 
        <div class="launch-data-section">
               <h3>mission: ${data[i].name} </h3>  
                <p><span>date:</span>${data[i].date_utc}</p>
        </div>
        <div class ="launch-data-section">         
                <p><span>success:</span> ${data[i].success}</p>
               <p><span> flight number :</span> ${data[i].flight_number}</p>
                 <img class="launch-image" src="${data[i].links.patch.small}"alt="${data[i].name}" /> 
                <p><span>read more:</span> <i class="fas fa-long-arrow-alt-right"></i>
                <a target="_blank" href="${data[i].links.wikipedia}">wikipedia</a></P>              
       </div> 
                           <div> `;
      }
    }
    launches2.innerHTML = "";
    for (i = 0; i < data.length; i++) {
      if (data[i].upcoming === false) {
        if (i > 6 && i < 10) {
          break;
        }
        launches2.innerHTML += `<div class="launche-data2"> 
        <div class="launch-data-section">
               <h3>mission: ${data[i].name} </h3>  
                <p><span>date:</span>${data[i].date_utc}</p>
        </div>
        <div class ="launch-data-section">          
                      
                <p><span>success :</span> ${data[i].success}</p>
                 <p><span> flight number :</span> ${data[i].flight_number}</p>
                   <img src="${data[i].links.patch.small}"alt="${data[i].name}" /> 
                <p><span>read more :</span> <i class="fas fa-long-arrow-alt-right"></i>
                <a target="_blank" href="${data[i].links.wikipedia}">wikipedia</a></P>              
       </div> 
                           <div> `;
      }
    }
    launches3.innerHTML = "";
    for (i = 0; i < data.length; i++) {
      if (data[i].upcoming === false) {
        if (i > 10 && i < 14) {
          launches3.innerHTML += `<div class="launche-data3"> 
        <div class="launch-data-section">
               <h3>mission: ${data[i].name} </h3>  
                <p><span>date:</span>${data[i].date_utc}</p>
        </div>
        <div class ="launch-data-section">         
                <p><span>success :</span> ${data[i].success}</p>
                <p><span> flight number :</span> ${data[i].flight_number}</p>
                  <img src="${data[i].links.patch.small}"alt="${data[i].name}" /> 
                <p><span>read more :</span> <i class="fas fa-long-arrow-alt-right"></i>
                <a target="_blank" href="${data[i].links.wikipedia}">wikipedia</a></P>              
       </div> 
                           <div> `;
        }
      }
    }
    launches4.innerHTML = "";
    for (i = 0; i < data.length; i++) {
      if (data[i].upcoming === true) {
        launches4.innerHTML += `<div class="launche-data4"> 
        <div class="launch-data-section">
               <h3>mission: ${data[i].name} </h3>  
                <p><span>date:</span>${data[i].date_utc}</p>
        </div>
        <div class ="launch-data-section">         
                <p><span>success :</span> ${data[i].success}</p>
                <p><span> flight number :</span> ${data[i].flight_number}</p>
         
                <p><span>read more :</span> <i class="fas fa-long-arrow-alt-right"></i>
                <a target="_blank" href="${data[i].links.wikipedia}">wikipedia</a></P>              
       </div> 
                           <div> `;
      }
    }
  } catch (error) {
    console.log("error : failed to call launches API ");
    launches.innerHTML = `<p>An error occurred when calling the API :( </p>`;
    launches2.innerHTML = `<p>An error occurred when calling the API :( </p>`;
    launches3.innerHTML = `<p>An error occurred when calling the API :( </p>`;
    launches4.innerHTML = `<p>An error occurred when calling the API :( </p>`;
  }
}
spacexlaunches();

/****************************  end latest launches api */

/************ rockets api page *****/

/*****  FALCON 9 *******/

const rocketFalcon9 = document.querySelector(".falcon9");
const rocketFalcon9Url = "https://api.spacexdata.com/v2/rockets/falcon9";
/* const rocketUrl = "https://api.spacexdata.com/v2/rockets/"; */

async function spacexRockets() {
  try {
    const response = await fetch(rocketFalcon9Url);
    const data = await response.json();
    rocketFalcon9.innerHTML = "";

    rocketFalcon9.innerHTML += `<div class="rocket-data"> 
           
            <div class="rocket-data-section">      
               <h3> ${data.id} </h3>       
               <div class ="rocket-image"><img src="${data.flickr_images[0]}" 
               alt="${data.id}" /> </div>        
            </div>
             <div class="rocket-data-section description">
                  <p>${data.description}</p> 
             </div>  
             <div class="rocket-data-section details">
                <p>active:${data.active}</p> 
                <p>stages: ${data.stages}</p>
                <p>cost per launch: ${data.cost_per_launch}</p>           
                <p>first flight: ${data.first_flight}</p>
                <p> height : ${data.height.meters} meters </p>
                <p>read more <i class="fas fa-long-arrow-alt-right"></i>
                <a target="_blank" class="wiki-btn" href="${data.wikipedia}">wikipedia</a></P>
            </div>
                             <div> `;
  } catch (error) {
    console.log("error : failed to call rocket API ");
    rocketFalcon9.innerHTML = `<p>An error occurred when calling the API :( </p>`;
  }
}
spacexRockets();

/*****  STARSHIP *******/

const rocketStarship = document.querySelector(".starship");
const rocketStarshipUrl = "https://api.spacexdata.com/v2/rockets/starship";
/* const rocketUrl = "https://api.spacexdata.com/v2/rockets/"; */

async function starship() {
  try {
    const response = await fetch(rocketStarshipUrl);
    const data = await response.json();
    rocketStarship.innerHTML = "";

    rocketStarship.innerHTML += `<div class="rocket-data"> 
           
            <div class="rocket-data-section">      
               <h3> ${data.id} </h3>       
               <div class ="rocket-image"><img src="${data.flickr_images[1]}" 
               alt="${data.id}" /> </div>        
            </div>
             <div class="rocket-data-section description">
                  <p>${data.description}</p> 
             </div>  
             <div class="rocket-data-section details">
                <p>active:${data.active}</p> 
                <p>stages: ${data.stages}</p>
                <p>cost per launch: ${data.cost_per_launch}</p>           
                <p>first flight: ${data.first_flight}</p>
                <p> height : ${data.height.meters} meters </p>
                <p>read more <i class="fas fa-long-arrow-alt-right"></i>
                <a target="_blank" class="wiki-btn" href="${data.wikipedia}">wikipedia</a></P>
            </div>
                             <div> `;
  } catch (error) {
    console.log("error : failed to call rocket API ");
    rocketStarship.innerHTML = `<p>An error occurred when calling the API :( </p>`;
  }
}
starship();

/*********** FALCON HEAVY ****/

const rocketFalconHeavy = document.querySelector(".falcon-heavy");
const rocketFalconHeavyUrl =
  "https://api.spacexdata.com/v2/rockets/falconheavy";
/* const rocketUrl = "https://api.spacexdata.com/v2/rockets/"; */
console.log(rocketFalconHeavyUrl);

async function FalconHeavy() {
  try {
    const response = await fetch(rocketFalconHeavyUrl);
    const data = await response.json();
    rocketFalconHeavy.innerHTML = "";

    rocketFalconHeavy.innerHTML += `<div class="rocket-data"> 
           
            <div class="rocket-data-section">      
               <h3> ${data.id} </h3>       
               <div class ="rocket-image"><img src="${data.flickr_images[1]}" 
               alt="${data.id}" /> </div>        
            </div>
             <div class="rocket-data-section description">
                  <p>${data.description}</p> 
             </div>  
             <div class="rocket-data-section details">
                <p>active:${data.active}</p> 
                <p>stages: ${data.stages}</p>
                <p>cost per launch: ${data.cost_per_launch}</p>           
                <p>first flight: ${data.first_flight}</p>
                <p> height : ${data.height.meters} meters </p>
                <p>read more <i class="fas fa-long-arrow-alt-right"></i>
                <a target="_blank" class="wiki-btn" href="${data.wikipedia}">wikipedia</a></P>
            </div>
                             <div> `;
  } catch (error) {
    console.log("error : failed to call rocket API ");
    rocketFalconHeavy.innerHTML = `<p>An error occurred when calling the API :( </p>`;
  }
}
FalconHeavy();
/*********** FALCON 1 ****/

const rocketFalconOne = document.querySelector(".falcon1");
const rocketFalconOneUrl = "https://api.spacexdata.com/v3/rockets/falcon1";
/* const rocketUrl = "https://api.spacexdata.com/v2/rockets/"; */
console.log(rocketFalconOneUrl);

async function Falcon1() {
  try {
    const response = await fetch(rocketFalconOneUrl);
    const data = await response.json();
    rocketFalconOne.innerHTML = "";

    rocketFalconOne.innerHTML += `<div class="rocket-data"> 
           
            <div class="rocket-data-section">      
               <h3> ${data.rocket_name} </h3>       
                     
            </div>
             <div class="rocket-data-section description">
                  <p>${data.description}</p> 
             </div>  
              <div class="rocket-data-section details">
                <p>active:${data.active}</p> 
                <p>stages: ${data.stages}</p>
                <p>cost per launch: ${data.cost_per_launch}</p>           
                <p>first flight: ${data.first_flight}</p>
                <p> height : ${data.height.meters} meters </p>
                <p>read more <i class="fas fa-long-arrow-alt-right"></i>
                <a target="_blank" class="wiki-btn" href="${data.wikipedia}">wikipedia</a></P>
            </div>
                             <div> `;
  } catch (error) {
    console.log("error : failed to call rocket API ");
    rocketFalconOne.innerHTML = `<p>An error occurred when calling the API :( </p>`;
  }
}
Falcon1();

/************  end rockets api *****/


/************* iss api*/
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

/************** mars api */

const marsData = document.querySelector(".marsContent");
const marsUrl = "https://api.maas2.apollorion.com/";

async function marsPosition() {
  try {
    const response = await fetch(marsUrl);
    const details = await response.json();
    // self check log console
    console.log(details);

    /* createHtml(details); */
    marsData.innerHTML = "";

    marsData.innerHTML += `<div class="mars-data">           
            <p>season:${details.season}    </p>     
            <P>min-temp:${details.min_temp}</p>
            <p>max-temp:${details.max_temp}</p>
            <p>pressure:${details.pressure}</p>
            <p>opacity:${details.atmo_opacity}</p>
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
});

function checkInputs() {
  // trim for white space
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  /*    const emailRecoveryValue = emailRecovery.value.trim(); */

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

/* login , creating account, recovery js*/

const emailOld = document.getElementById("emailExistent");
const passwordOld = document.getElementById("passwordExistent");
const formOld = document.getElementById("formLogin");

formOld.addEventListener("submitOld", (e) => {
  let errors = [];
  if (emailOld.value === "" || emailOld.value == null) {
    errors.push("email is required");
  }
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#loginForm");
  const createAccountForm = document.querySelector("#createAccount");
  const passwordRecovery = document.querySelector("#pw-recovery");
  const passwordRecovery2 = document.querySelector("#pw-recovery2");

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("hidden-form");
    createAccountForm.classList.add("hidden-form");
  });
  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();

      createAccountForm.classList.remove("hidden-form");
      loginForm.classList.add("hidden-form");
    });
  document
    .querySelector("#linkPasswordRecovery")
    .addEventListener("click", (e) => {
      e.preventDefault();
      passwordRecovery.classList.remove("hidden-recovery");
      loginForm.classList.add("hidden-form");
    });
  document
    .querySelector("#linkPasswordRecovery2")
    .addEventListener("click", (e) => {
      e.preventDefault();
      passwordRecovery2.classList.remove("hidden-recovery2");
      passwordRecovery.classList.add("hidden-recovery");
    });
  document.querySelector("#backToLogin").addEventListener("click", (e) => {
    e.preventDefault();
    passwordRecovery2.classList.add("hidden-recovery2");
    loginForm.classList.remove("hidden-form");
  });
});
/* end login , creating account, recovery js*/

/*******launches, rockets slider********/

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
