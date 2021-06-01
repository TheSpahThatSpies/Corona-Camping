// Forside slideshow
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("forside-slideshow__slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
  }

  // Om Corona Camping Trustpilot reviews
  var reviewsIndex = 1;
  showReviews(reviewsIndex);

  function plusReviews(n) {
      showReviews(reviewsIndex += n);
  }

  function currentReview(n) {
      showReviews(reviewsIndex = n);
  }

  function showReviews(n) {
    var i;
    var reviews = document.getElementsByClassName("trustpilot-slide");
    if (n > reviews.length) {reviewIndex = 1}
    if (n < 1) {reviewsIndex = reviews.length}
    for (i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    reviews[reviewsIndex-1].style.display = "block";
  }