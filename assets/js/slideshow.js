var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var arrowRight = document.getElementsByClassName("fa-angle-right");
  var arrowLeft = document.getElementsByClassName("fa-angle-left");

  if (n > slides.length) slideIndex = 1
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  if (!document.getElementById("noArrow")) {
    if (document.getElementById("allBlack")) {
      arrowRight[0].style.color = "black";
      arrowLeft[0].style.color = "black";
    }
    else {
      if (slideIndex == 1) {
          arrowRight[0].style.color = "black";
          arrowLeft[0].style.color = "black";
      }
      else {
        arrowRight[0].style.color = "white";
        arrowLeft[0].style.color = "white";
      }
    }
  }
}