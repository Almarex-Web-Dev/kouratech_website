"use strict";

// Animate on scroll functionalities
// selectioner tout les element qui as besoin de quelque fonctionalite dans le HTML
var textHeader = document.querySelector('h2');
var hrLine = document.querySelectorAll('.hr_line_style');
var boutonRemonter = document.querySelector('.back_to_top');
var noService = document.querySelectorAll('.nos_services');
var imageApropos = document.querySelectorAll('.apropos_image ul li');
var aproposHeader = document.querySelectorAll('.apropos_description h3');
var animateCard = document.querySelectorAll('.card');
var cardHeader = document.querySelectorAll('.card_header h3');
var cardIcon = document.querySelectorAll('.card_header span');
var processus = document.querySelectorAll('.nos_processus_card');
var PROCESANIMATION = 'animateCard 2.5s forwards cubic-bezier(0.19, 1, 0.22, 1)';
window.addEventListener('load', function () {
  // l'evement de defilement
  window.addEventListener('scroll', startAnimation); // La function que on va executer lor de defilement

  function startAnimation() {
    var windowHeight = document.documentElement.clientHeight; // const getAproposHeaderPosition = aproposHeader.getBoundingClientRect().y

    hrLine.forEach(function (line) {
      var linePosition = line.getBoundingClientRect().y;

      if (linePosition < windowHeight) {
        line.style.animation = 'hr_line_style 3.5s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      } else {
        line.style.animation = '';
      }
    });
    noService.forEach(function (cards) {
      var cardsPosition = cards.getBoundingClientRect().top;

      if (cardsPosition < windowHeight) {
        cards.style.animation = 'cards 1.5s forwards cubic-bezier(0.165, 0.84, 0.44, 1)';
      } else {
        cards.style.animation = '';
      }
    });
    imageApropos.forEach(function (image) {
      var imagePosition = image.getBoundingClientRect().top;

      if (windowHeight > imagePosition) {
        image.style.animation = 'imageApropos 2s forwards cubic-bezier(0.215, 0.61, 0.355, 1)';
      } else {
        image.style.animation = '';
      }
    }); // Apropos Header

    aproposHeader.forEach(function (header) {
      var getHeaderPosition = header.getBoundingClientRect().y;

      if (windowHeight > getHeaderPosition) {
        header.style.animation = 'aproposHeader 1s forwards cubic-bezier(0.455, 0.03, 0.515, 0.955)';
      } else {
        header.style.animation = '';
      }
    }); // Animation des card d'apropos lor de defilement

    animateCard.forEach(function (card, index) {
      var cardsPosition = card.getBoundingClientRect().y;

      if (windowHeight > cardsPosition) {
        card.style.animation = PROCESANIMATION;
      } else {
        card.style.animation = '';
      }

      card.addEventListener('animationend', function () {
        cardIcon.forEach(function (icon) {
          icon.style.animation = 'animateCard 0.5s forwards cubic-bezier(0.19, 1, 0.22, 1)';
        });
        cardHeader.forEach(function (cardheader) {
          cardheader.style.animation = 'animateCard 0.5s forwards 1s cubic-bezier(0.19, 1, 0.22, 1)';
        });
      }, {
        once: true
      });
    });
    animateCard[1].style.animationDelay = "".concat(1, "s");
    animateCard[2].style.animationDelay = "".concat(1.5, "s");
    processus.forEach(function (proces) {
      var procesPosition = proces.getBoundingClientRect().y;

      if (windowHeight > procesPosition) {
        proces.style.animation = 'processus 1.5s forwards cubic-bezier(0.55, 0.055, 0.675, 0.19)';
      } else {
        proces.style.animation = '';
      }

      proces.style.animationDelay = "".concat(250, "ms");
    }); // Retour a haut

    fromTop = window.pageYOffset;

    if (fromTop > 500) {
      boutonRemonter.classList.add('show');
    } else {
      boutonRemonter.classList.remove('show');
    }
  } // Ajouter la fonctionalite de slider
  // SHOW THE SPINNER


  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    centerSlide: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      475: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      950: {
        slidesPerView: 3
      },
      1400: {
        slidesPerView: 4
      }
    }
  });
  setTimeout(function () {
    document.body.classList.add('loaded');
  }, 500);
});