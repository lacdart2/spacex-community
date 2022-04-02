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

/****************************   latest launches api */

const launches = document.querySelector(".launches-content");
const launches2 = document.querySelector(".launches-content2");
const launches3 = document.querySelector(".launches-content3");
const launches4 = document.querySelector(".launches-content4");
const launchesUrl = "https://api.spacexdata.com/v4/launches/";

console.log(launchesUrl);

async function spaceXLaunches() {
  try {
    const response = await fetch(launchesUrl);
    const data = await response.json();

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
spaceXLaunches();

/****************************  end latest launches api */
