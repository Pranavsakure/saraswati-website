let hidden = document.querySelector('.--hidden');


hidden.style.visibility = "hidden"

// login.addEventListener("click", loginPage);

// js in problems file
// coloring
//live animation
// login page styling



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

console.log(hidden)
// function loginPage() {
//   if (page.style.display != "none") {
//     page.style.display = "none";
//   }

//   else {
//         page.style.display = "block";
//     }
// }



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".--nav-link");

// hamburger javascript for mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link-item").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

console.log(page);