// main top carrusel
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
// end main carrusel
// toggler


document.getElementById("toggle").addEventListener("click", function () {
  document.getElementById("nav").classList.toggle("hidden")
  document.getElementById("nav").classList.toggle("h-[100px]")
  document.getElementById("navdropdown").classList.toggle("h-[4rem]")
  document.getElementById("navdropdown").classList.toggle("h-[20rem]")
  document.getElementById("navdropdown").classList.toggle("animate-bounce	")
})
