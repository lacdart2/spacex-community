/* navigation background color changing on scroll */

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");

  let windowPosition = window.scrollY > 0;

  header.classList.toggle("scroll-nav", windowPosition > 0);
});
/** hamburger menu */
let header = document.querySelector("header");
let hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", function () {
  header.classList.toggle("menu-open");
});
/* end navigation background color changing on scroll */

document.getElementById("event1").onclick = function () {
  showImage();

  function showImage() {
    document.getElementById("image1").style.visibility = "visible";
  }
};

document.getElementById("event2").onclick = function () {
  showImage2();

  function showImage2() {
    document.getElementById("image2").style.visibility = "visible";
  }
};

document.getElementById("event3").onclick = function () {
  showImage3();

  function showImage3() {
    document.getElementById("image3").style.visibility = "visible";
  }
};
document.getElementById("event4").onclick = function () {
  showImage4();

  function showImage4() {
    document.getElementById("image4").style.visibility = "visible";
  }
};
document.getElementById("event5").onclick = function () {
  showImage5();

  function showImage5() {
    document.getElementById("image5").style.visibility = "visible";
  }
};
document.getElementById("event6").onclick = function () {
  showImage6();

  function showImage6() {
    document.getElementById("image6").style.visibility = "visible";
  }
};
let imgMaster = document.querySelector(".master");
let event1 = document.querySelector("#event1");
let event2 = document.querySelector("#event2");
let event3 = document.querySelector("#event3");
let event4 = document.querySelector("#event4");
let event5 = document.querySelector("#event5");
let event6 = document.querySelector("#event6");
event1.addEventListener("click", () => {
  imgMaster.src = "images/elon_musk.jpg";
});
event2.addEventListener("click", () => {
  imgMaster.src = "images/falcon1-first-flight.jpg";
});
event3.addEventListener("click", () => {
  imgMaster.src = "images/falcon9-first.jpg";
});
event4.addEventListener("click", () => {
  imgMaster.src = "images/falcon-heavy-event.jpg";
});
event5.addEventListener("click", () => {
  imgMaster.src = "images/crew-dragon.jpg";
});
event6.addEventListener("click", () => {
  imgMaster.src = "images/starship-event.jpg";
});

let ShowEventImage = document.getElementById("show-event-image");
let timelineContent = document.getElementById("timeline-content");

function showContent() {
  timelineContent.addEventListener("click", function () {
    ShowEventImage.innerHTML = timelineContent.image;
  });
}
showContent();
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

/***** countdown next launch**** */

/* const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");

const currentYear = new Date().getFullYear();
const nextLaunchTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = nextLaunchTime - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}
updateCountdown();

setInterval(updateCountdown, 1000); */

/*const nextLaunch = "https://api.spacexdata.com/v2/launches/next";


 async function nextLaunchdate() {
  try {
    const response = await fetch(nextLaunch);
    const data = await response.json();
    let launch = data.date_utc;
    console.log(launch); */
