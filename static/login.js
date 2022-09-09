let login = document.getElementById('-nav-2');
let page = document.getElementById("--login-portal");
let sub = document.getElementById("submit1")
let hidden = document.querySelector('.--hidden');

hidden.style.visibility = "hidden"
page.style.display = "none"

sub.addEventListener("click", checkEmail);
// login.addEventListener("click", loginPage);

// link in buttons
// coloring
//live animation





function checkEmail(e) {
  //remove the default
  e.preventDefault();
  mail = document.getElementById("email").value;
  console.log(mail);
  
  if (mail.indexOf("smail.iitm.ac.in") >= 0){
    console.log("hi");
    hidden.style.visibility = "visible"
  }
  else {
    alert("Incorrect Email");
  }
  
}

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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

console.log(hidden)
function loginPage() {
  if (page.style.display != "none") {
    page.style.display = "none";
  }
  
  else {
        page.style.display = "block";
    }
}

console.log(page)