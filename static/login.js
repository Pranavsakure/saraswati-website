let login = document.getElementById('-nav-2');
let page = document.getElementById("--login-portal");
let sub = document.getElementById("submit1")
let hidden = document.querySelector('.--hidden');

// page.style.display = "none"

sub.addEventListener("click", checkEmail);

function pageRedirect() {
  window.location.replace("/problems");
}      
setTimeout("pageRedirect()", 1000000);

function checkEmail(e) {
    //remove the default
    e.preventDefault();
    mail = document.getElementById("email").value;
    console.log(mail);
    
    if (mail.indexOf("smail.iitm.ac.in") >= 0){
      console.log("hi");
      // hidden.style.visibility = "visible"
      pageRedirect();
    }
    else {
      alert("Incorrect Email");
    }
    
  }
