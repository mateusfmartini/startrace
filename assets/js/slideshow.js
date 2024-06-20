let slideIndex = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;
showSlides();
showSlides2();
showSlides3();
showSlides4();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}

function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}
    slides[slideIndex2-1].style.display = "block";
    setTimeout(showSlides2, 3000);
}

function showSlides3() {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) {slideIndex3 = 1}
    slides[slideIndex3-1].style.display = "block";
    setTimeout(showSlides3, 3000);
}

function showSlides4() {
    let i;
    let slides = document.getElementsByClassName("mySlides4");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex4++;
    if (slideIndex4 > slides.length) {slideIndex4 = 1}
    slides[slideIndex4-1].style.display = "block";
    setTimeout(showSlides4, 3000);
}
  

