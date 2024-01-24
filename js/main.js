// banner slider 
  let currentSlider = 1;
  const totalSlides = 3; //  total number of slides

  function showPrevious() {
    showSlider(currentSlider - 1);
  }

  function showNext() {
    showSlider(currentSlider + 1);
  }

  function showSlider(sliderNumber) {
    // Wrap around when reaching the end or beginning
    if (sliderNumber > totalSlides) {
      sliderNumber = 1;
    } else if (sliderNumber < 1) {
      sliderNumber = totalSlides;
    }

    // Hide all sliders
    const sliders = document.querySelectorAll('.space-banner-inner');
    sliders.forEach(slider => slider.classList.remove('active'));

    // Show the selected slider
    document.querySelector(`.space-banner-inner:nth-child(${sliderNumber})`).classList.add('active');

    currentSlider = sliderNumber;
  }
// banner slider end  




// banner slider 
let currentSliderss = 1;
const totalSlidesss = 3; //  total number of slides

function showPreviouss() {
  showSliderss(currentSliderss - 1);
}

function showNexts() {
  showSliderss(currentSliderss + 1);
}

function showSliderss(sliderNumberss) {
  // Wrap around when reaching the end or beginning
  if (sliderNumberss > totalSlidesss) {
    sliderNumberss = 1;
  } else if (sliderNumberss < 1) {
    sliderNumberss = totalSlidesss;
  }

  // Hide all sliders
  const sliders = document.querySelectorAll('.populer-courses-main');
  sliders.forEach(slider => slider.classList.remove('active'));

  // Show the selected slider
  document.querySelector(`.populer-courses-main:nth-child(${sliderNumberss})`).classList.add('active');

  currentSliderss = sliderNumberss;
}
// banner slider end  

// side bar script 
function toggleCartt(){
  document.querySelector('.sidebar').classList.toggle('open-cart');
  }

// slick slider script 
$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 100,
    autoplaySpeed: 1000,
    infinite: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    arrows : false,
    responsive: [
{
  breakpoint: 991,
  settings: {
    slidesToShow: 3,
  }
},
{
  breakpoint: 767,
  settings: {
    slidesToShow: 1,
  }
}
]
  });
  
});

