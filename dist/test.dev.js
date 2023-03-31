"use strict";

var carousel = document.querySelector('.carousel');
var iconSlider = document.querySelectorAll('.wrapper button');
var imageClientWidth = document.querySelectorAll('img')[0]; // console.log(carousel.scrollLeft)

var isDragStart = false,
    isDragging,
    prevPageX,
    prevScrollleft,
    positionDiff;
var imageWidth = imageClientWidth.clientWidth + 14; // get the width of the element

var scrollWidth = carousel.scrollWidth - carousel.clientWidth;

var showHideicons = function showHideicons() {
  iconSlider[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block';
  iconSlider[1].style.display = carousel.scrollLeft == scrollWidth ? 'none' : 'block';
};

iconSlider.forEach(function (icon) {
  icon.addEventListener('click', function () {
    carousel.scrollLeft += icon.id == 'left' ? -imageWidth : imageWidth;
    setTimeout(function () {
      return showHideicons();
    }, 100);
  });
});

var autoSlide = function autoSlide() {
  if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth) return;
  positionDiff = Math.abs(positionDiff);
  var imageWidth = imageClientWidth.clientWidth + 14;
  var valDifference = imageWidth - positionDiff;

  if (carousel.scrollLeft > prevScrollleft) {
    return carousel.scrollLeft += positionDiff > imageWidth / 3 ? valDifference : -positionDiff;
  }

  carousel.scrollLeft -= positionDiff > imageWidth / 3 ? valDifference : -positionDiff;
};

var dragStart = function dragStart(e) {
  // change global var on mousedown event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollleft = carousel.scrollLeft; //   console.log(prevScrollleft)
}; // create the dragging function


var dragging = function dragging(e) {
  // scroll images to left accroding to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add('dragging');
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollleft - positionDiff;
  autoSlide();
};

var dragStop = function dragStop(e) {
  isDragStart = false;
  if (!isDragging) return;
  isDragging = false;
  carousel.classList.remove('dragging');
};

var autoSliding = function autoSliding() {
  var interval = setInterval(function () {
    dragging();
  }, 3000);
  return interval;
};

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);
carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mouseleave', dragStop);
carousel.addEventListener('touchend', dragStop);
autoSliding();