/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(document).ready(function() {

  function moveLayers(e) {
    switch (e.keyCode) {
      case 40:
        return processDownArrow();
      case 38:
        return processUpArrow();
    }
  }

  function processDownArrow() {
    console.log('arrow down')
    let $top = $('.content').position().top;
    let $left = $('.content').position().left;
    let $harryLeft = $('.harry-container').position().left;
    let $harryTop = $('.harry-container').position().top;

      // first downward vertical navigation
    if ($top.between(-$height*2, 1)) {
      $top -= $height*0.05
      $('.content').css('top', `${$top}px`)

      // first rightward horizontal navigation
    } else if ($top <= -$height*2 && $left.between(-10750, 10)) {
      $left -= $width*0.05
      $harryLeft += $width*0.05

      $('.content').css('left', `${$left}px`)
      $('.harry-container').css('left', `${$harryLeft}px`)

      // second downward vertical navigation
    } else if ($left < -10750 && $top > -$height*3) {
      $top -= $height*0.05
      $harryTop += $height*0.05

      $('.content').css('top', `${$top}px`)
      $('.harry-container').css('top', `${$harryTop}px`)

      // second rightward horizontal navigation
    } else if ($top <= -$height*3 && $left.between(-10750, -12900)) {
      $left -= $width*0.05
      $harryLeft += $width*0.05

      $('.content').css('left', `${$left}px`)
      $('.harry-container').css('left', `${$harryLeft}px`)
    }
  }

  function processUpArrow() {
    let $top = $('.content').position().top;
    let $left = $('.content').position().left;
    let $harryLeft = $('.harry-container').position().left;
    let $harryTop = $('.harry-container').position().top;

      // first upward vertical navigation
    if ($top.between(-$height*2 - 100, 0) && $harryLeft <= 300) {
      $top += $height*0.05
      $('.content').css('top', `${$top}px`)

      // first leftward horizontal navigation
    } else if ($top.between(-$height*2 - 50, 0) && $left.between(-18000, 10)) {
      $left += $width*0.05
      $harryLeft -= $width*0.05

      $('.content').css('left', `${$left}px`)
      $('.harry-container').css('left', `${$harryLeft}px`)

      // second upward vertical navigation
    } else if ($left >= -10800 && $top.between(-$height*2, -$height*4)) {
      $top += $height*0.05
      $harryTop -= $height*0.05
      $('.content').css('top', `${$top}px`)
      $('.harry-container').css('top', `${$harryTop}px`)

      // second leftward horizontal navigation
    } else if ($top <= -$height*3 && $left.between(-10700, -13000)) {
      $left += $width*0.05
      $harryLeft -= $width*0.05

      $('.content').css('left', `${$left}px`)
      $('.harry-container').css('left', `${$harryLeft}px`)
    }
  }

  function  triggerAnimations() {
    let $left = $('.content').position().left;
    let $harryLeft = $('.harry-container').position().left;

    triggerBannerAnimations($harryLeft);
    triggerPortraitAnimations($harryLeft);
    triggerSkill1Animations($harryLeft);
    triggerSnareAnimations($harryLeft);
    triggerSpacebarAnimation($left);
  }

  function triggerSpacebarAnimation(left) {
    if (left < -12900) {
      $('.spacebar').addClass('flash');
    }
  }

  function triggerSkill1Animations(harryPosition) {
    if (harryPosition > 8100) {
      $('.skill-1').addClass('bounce-proficient')
    }

    if (harryPosition > 8200) {
      $('.skill-2').addClass('bounce-proficient')
    }

    if (harryPosition > 8300) {
      $('.skill-3').addClass('bounce-proficient')
    }

    if (harryPosition > 8400) {
      $('.skill-4').addClass('bounce-proficient')
    }
  }

  function triggerBannerAnimations(harryPosition) {
    if (harryPosition > 2100) {
      $('.g-banner-container').addClass('drop-down')
    }

    if (harryPosition > 2400) {
      $('.h-banner-container').addClass('drop-down')
    }

    if (harryPosition > 2900) {
      $('.r-banner-container').addClass('drop-down')
    }

    if (harryPosition > 3400) {
      $('.s-banner-container').addClass('drop-down')
    }
  }

  function triggerPortraitAnimations(harryPosition) {
    if (harryPosition > 4500) {
      $('.portrait-1').addClass('fadeout')
    }
  }

  let alreadyTriggered = false;

  function triggerSnareAnimations(harryPosition) {
    if (harryPosition > 11000 && !alreadyTriggered) {
      alreadyTriggered = true;
      window.setInterval(function() {
        animateSnares();
      }, 1000)
    }
  }

  function animateSnares() {
    let first = $('.snare-4');
    let second = $('.snare-3');
    let third = $('.snare-2');
    let fourth = $('.snare-1');

    first.removeClass('snare-4').addClass('snare-1');
    second.removeClass('snare-3').addClass('snare-4');
    third.removeClass('snare-2').addClass('snare-3');
    fourth.removeClass('snare-1').addClass('snare-2');
  }

  let killedQuirrell = false;

  function triggerQuirrellFight(e) {
    $left = $('.content').position().left

    if (e.keyCode === 32 && $left < -12900) {
      killedQuirrell = true;
      $('.harry').addClass('spell-right');
      $('.spell').addClass('spell-fire');
      setTimeout(function() {
        $('.quirrell').addClass('dust').removeClass('quirrell-left');
        $('.spacebar').removeClass('flash');
      }, 1000);
      setTimeout(function() {
        activateContactModal();
      }, 2000);
    }
    if (e.keyCode === 27) {
      if (killedQuirrell) {
        killedQuirrell = false;
        $('.harry').removeClass('spell-right');
        $('.spell').removeClass('spell-fire');
        setTimeout(function() {
          $('.quirrell').removeClass('dust').addClass('quirrell-left');
          $('.spacebar').addClass('flash');
        }, 1000);
        // make display invisible
        $('.black-out-background').addClass('invisible');
      }
    }
  }

  function resetHarryPosition(e) {
    let $harryLeft = $('.harry-container').position().left;
    if (animatingHarry) {
      setTimeout(function() {

        if (e.keyCode === 40 && $harryLeft > 300) {
          $('.harry').attr('class', 'harry');
          $('.harry').addClass('face-right walk-face-right-1');
          setTimeout(function() {
            $('.harry').removeClass('walk-face-right-1')
          }, 750);
        } else if (e.keyCode === 38 && $harryLeft > 300) {
          $('.harry').attr('class', 'harry');
          $('.harry').addClass('face-left walk-face-left-1');
          setTimeout(function() {
            $('.harry').removeClass('walk-face-left-1')
          }, 750);
        }
      }, 500);
    }
  }

  let animatingHarry = false;


  function animateHarry(e) {
    let harry = $('.harry');
    let $harryLeft = $('.harry-container').position().left;
    if (!animatingHarry) {
      $left = $('.content').position().left;

      if (e.keyCode === 40 && $harryLeft > 300) {
        if ($left.between(-10700, -10850)) {
          harry.addClass('fall-right');
        } else if ($left <= -10850 || $left >= -10650) {
          harry.removeClass('fall-right');
        }

        animatingHarry = true;
        harry.addClass('walk-face-right-2')
        setTimeout(function() {
          harry.removeClass('walk-face-right-2')
          animatingHarry = false;
        }, 1000);
      } else if (e.keyCode === 38 && $harryLeft > 300) {
        if ($left.between(-10700, -10850)) {
          harry.addClass('fall-left');
        } else if ($left <= -10850 || $left >=-10650) {
          harry.removeClass('fall-left');
        }

        animatingHarry = true;
        harry.addClass('walk-face-left-2')
        setTimeout(function() {
          harry.removeClass('walk-face-left-2')
          animatingHarry = false;
        }, 1000);
      }
    }
  }

  function activateContactModal() {
    if (killedQuirrell) {
      // make display visible
      $('.black-out-background').removeClass('invisible');
    }
  }

  $(window).keyup(function(e) {
    resetHarryPosition(e);
  })

  $(window).keydown(function(e) {
    triggerQuirrellFight(e);
    animateHarry(e);
    moveLayers(e);
    triggerAnimations(e);
    // positionHarry();
  })

  $(window).resize(function() {
    // centerContent();
    // calculate windowHeight and windowWidth
    // calculate distance needed to travel
    $height = $(window).height();
    $width = $(window).width();
  })
})

let $height = $(window).height();
let $width = $(window).width();

Number.prototype.between = function (a, b) {
  let min = Math.min(a,b), max = Math.max(a, b);
  return this > min && this < max;
};


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map