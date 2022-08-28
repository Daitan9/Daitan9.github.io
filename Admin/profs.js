// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});


//Pop-up
function show_popup()
{
  document.getElementById("popup").focus();
  document.getElementById('popup').style.display = 'block';
  document.getElementById('popup').style.boxShadow = "0 0 0 10000px rgba(0,0,0,0.5)"
}

function close_popup()
{
  document.getElementById('popup').style.display = 'none'; 
}

function Discord() {

  navigator.clipboard.writeText("86.218.59.135:");
  
  alert("Unknown text copied.");
}

let adminAccess = localStorage.getItem('adminaccess'); 

if (adminAccess === 'yes') {
    document.getElementById('html').style.display = 'block';
  }
  else {
    window.location = "404.html"
  }


  function show_quest1()
  {
    document.getElementById("quest1").focus();
    document.getElementById('quest1').style.display = 'block';
    document.getElementById('quest1').style.boxShadow = "0 0 0 10000px rgba(0,0,0,0.5)"
  }
  
  function close_quest1()
  {
    document.getElementById('quest1').style.display = 'none';
    document.getElementsByClassName('error1').style.display = 'none';
    document.getElementsByClassName('valid1').style.display = 'none';
  }

  function show_quest2()
  {
    document.getElementById("quest2").focus();
    document.getElementById('quest2').style.display = 'block';
    document.getElementById('quest2').style.boxShadow = "0 0 0 10000px rgba(0,0,0,0.5)"
  }
  
  function close_quest2()
  {
    document.getElementById('quest2').style.display = 'none';
    document.getElementsByClassName('error2').style.display = 'none';
    document.getElementsByClassName('valid2').style.display = 'none';
  }

  // function change_image()
  // {
  //   var audio = document.getElementById("audio");

  //   if (document.getElementById("SG1").style.display === "inline") {
  //     document.getElementById("SG1").style.display="none";
  //     document.getElementById("SG2").style.display="inline";
  //     audio.play();
  //   } 
  //   else {
  //     document.getElementById("SG1").style.display="inline";
  //     document.getElementById("SG2").style.display="none";
  //     audio.pause();
  //     audio.currentTime = 0;
  //   }
  // }

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}