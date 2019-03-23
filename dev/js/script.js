"use strict";

$(document).ready(function() {
 
});

$('#fullpage').fullpage({
  sectionSelector: '.mk-section',
  licenseKey: '07B26BE7-338C4324-918569EB-577BA49D',

  // scrollBar: true,


  // scrollOverflowReset: false,
  // scrollOverflowOptions: null,
  navigation: true,
  navigationPosition: 'left',
  // scrollOverflow: true,

  // verticalCentered: false,


});
// $.fn.fullpage.setAllowScrolling(false);
console.log('maks');



// $(document).ready(function() {

//   // Humburger
//   var $tabWidth = 900;
//   var $nav = $(".js-nav");
//   var $hamburgerButton = $(".js-hamburgerButton");
//   var $navList = $(".js-navList");
//   var $navLink = $(".js-navLink");

//   $nav.on("click", function(event) {
//     var $target = $(event.target);

//     if(	$(window).width() < $tabWidth ) {
//       $("body").toggleClass("locked");
//     }

//     if ($target.closest($hamburgerButton) || $target.is($nav) || $target.is($navLink)) {
//       $hamburgerButton.toggleClass("is-active");
//       $navList.toggleClass("open");
//     }
//   });

//   //Slick slider
//   var $testimonialsSlider = $(".js-testimonialsSlider");
//   $testimonialsSlider.slick({
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     // autoplay: true,
//     // autoplaySpeed: 2000,
//     arrows: false
//   });

//   //Google form
//   // validate
//   // Custom validator for letters (uppercase/lowercase)
//   $.validator.addMethod("lettersOnly", function (value, element) {
//     return this.optional(element) || /^[A-zА-яЁё]+$/i.test(value);
//   }, "Пожалуйста, введите только буквы");

//   var $formContact = $(".js-formContact");
//   $formContact.validate({
//     submitHandler: function(form) {
//       $.ajax({
//         url: 'https://docs.google.com/forms/d/e/1FAIpQLSc3FUmhNOfaIwSteeKH8hDLmp9yJ4K7FbHI_WWXaQY14PCKrA/formResponse',
//         method: 'POST',
//         data: $(form).serializeArray(),
//         dataType: "xml",
  
//         beforeSend: function() {
//           $(form).hide();
//         },
  
//         statusCode: {
//           0: function () {
//             $('.dummy').show();
              
//             setTimeout(function() {
//               $('.dummy').hide();
//               $(form).show();
//             }, 5000);
//           },
  
//           404: function () {

//           },
//         },
        
//         complete: function() {
//           $formContact[0].reset();  
//         },
//       });
//     }
//   });

//   var $inputLogin = $(".js-inputLogin");
//   $inputLogin.rules("add", {
//     required: true,
//     lettersOnly: true,
//     messages: {
//       required: "Имя не может быть пустым",
//     }
//   });

//   var $inputEmail = $(".js-inputEmail");
//   $inputEmail.rules("add", {
//     required: true,
//     email: true,
//     messages: {
//       required: "Email не может быть пустым",
//       email: "Ваш электронный адрес должен быть в формате name@domain.com"
//     }
//   });

//   var $textareaText = $(".js-textareaText");
//   $textareaText.rules("add", {
//     required: true,
//     messages: {
//       required: "Комментарий не может быть пустым",
//     }
//   });





//   /*
//   Filter
//   http://yiotis.net/filterizr/
//   https://gist.github.com/akshaynagpal/0dd98b2abc3a8c68e251309db32daa0d
//   https://ru.stackoverflow.com/questions/515724/%D0%97%D0%B0%D1%87%D0%B5%D0%BC-%D0%BD%D1%83%D0%B6%D0%B5%D0%BD-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-filter-%D0%B2-jquery


//   https://codemyui.com/tag/navigation-menu/
//   https://davidwalsh.name/demo/css-flip.php
//   http://css3.bradshawenterprises.com/flip/

//   https://github.com/VincentGarreau/particles.js/
//   http://www.coolwebmasters.com/education-and-learning/1523-css3-progress-bars.html

//   http://exauto.ua/ru map code

//   //Описание портфолио
//   http://samasajt.blogspot.com/2017/03/kak-sozdat-gadget-iz-google-formy.html
//   http://tilda.education/articles-navigation

//   // скрол навигации
//   https://github.com/trungk18/Change-Navigation-Active-Class-on-Page-Scroll
//   http://codetheory.in/change-active-state-links-sticky-navigation-scroll/

//   https://ru.stackoverflow.com/questions/653774/%D0%BA%D0%B0%D0%BA-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D0%BA%D0%BB%D0%B0%D1%81%D1%81-%D0%BF%D1%80%D0%B8-%D1%81%D0%BA%D1%80%D0%BE%D0%BB%D0%BB%D0%B5-%D0%B2-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%D0%BC-%D0%BC%D0%B5%D1%81%D1%82%D0%B5
//   http://gnatkovsky.com.ua/yakorya-i-plavnyj-perexod-po-yakornym-ssylkam.html

//   http://denis-creative.com/unikalnaya-forma-obratnoj-svyazi-s-ajax-na-php/

//   https://www.youtube.com/watch?v=vAgCY6L6n3I
//   https://smartlanding.biz/sozdanie-formy-obratnoj-svyazi.html

//   http://natfolio.ru/portfolio.html
//   https://scripteden.com/previews/Clean/
//   http://webcode.com.ua/index.html#second
//   https://hmil.ru/
//   http://www.black-web.ru/about.php

//   http://www.kadrof.ru/st_pf.shtml
//   https://www.websource.in.ua/
//   https://www.weblancer.net/users/Roosso/


//   https://up-site.com.ua/
//   https://1stwebdesigner.com/css-effects/
//   https://codemyui.com/button-border-and-text-color-fill-on-hover/
//   https://codemyui.com/ghost-button-animation/ игеещт
//   https://davidwalsh.name/css-flip
//   https://codemyui.com/link-underline-button-animation-hover/
//   https://codemyui.com/simple-box-shadow-button-hover-animation/
//   https://codemyui.com/css-bordertransitions-buttons/
//   https://codemyui.com/cool-button-hover-effects/
//   https://codemyui.com/link-button-animation-hover/
//   https://codemyui.com/css-button-border-hover-effects/

//   для портотипа
//   https://codemyui.com/animated-material-design-button/


//   */
//   /*
//     header.header
//           div.header-fullscreen
//             video.header-fullscreen__video(loop muted autoplay )
//               source(src="video/header-video.mp4" height="500px" type="video/mp4")
//           div.header-info
//             div.caption
//               h1.caption__title Front End developer
//               div.more
//                 button.more__button Learn More
//   */

//   // var skillsDiv = $('.progress-bars');
//   /*
//     div.text 
//                     | “Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat.
//                     | Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum
//                     | ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.”
//                   div.text 
//                     | “Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat.
//                     | Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum
//                     | ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.”
//                   div.text 
//                     | “Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat.
//                     | Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum
//                     | ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.”
            
//   */

//   // |Если вы попали на мой сайт, то скорей всего вам нужна html верстка или верстка шаблонов для WordPress, а может вам просто понравился мой сайт.

//   // Занимаюсь версткой сайтов. Использую новые технологии верстки, такие как HTML5, CSS3, JavaScript, BOOTSTRAP, LESS, SASS, GULP, AJAX. А также предоставляю некоторые дополнительные услуги по веб разработке. Для меня это не просто хобби, а основной заработок и поэтому к работе отношусь серьезно и с большой ответственностью.

//   // На моем сайте вы найдете всю нужную для вас информацию и можете посмотреть примеры моих работ.

//   // Чтобы связаться со мной воспользуйтесь формой обратной связи или отправьте письмо на мой почтовый ящик

//   //https://aweb.ua/vacancies/html-coder вакансия

//   // !!!!!!!!!!!!!!!!
//   // https://yaustal.com/stil_moda/34142-24-letnjaja-amerikanskaja-model-i-zvezda-instagram-jellison-parker-allison-parker-na-foto-iz-instagram.html

//   $(window).bind("scroll.once", function() {
//     var winT = $(window).scrollTop();
//     var winH = $(window).height();
//     var skillsT = $(".skills").offset().top;

//     console.log("winT", winT);
//     console.log("winH", winH);
//     console.log("winT + winH", winT + winH);
//     console.log("skillsT", skillsT);

//     if (winT + winH - 250 > skillsT) {
//       test();
//     }
//   });

//   function test() {
//     // $('.progress-bar').each(function(index, element) {

//     // 	var progressBarText = $(element).find('.progress-bar__text');
//     // 	var progressBarTextValue = progressBarText.text();

//     // 	progressBarText.animate(
//     // 		{
//     // 			width: progressBarTextValue
//     // 		},
//     // 		{
//     // 			duration: 5000,
//     // 			step: function(x) {
//     // 				progressBarText.text(Math.round(x) + "%");
//     // 			},
//     // 			complete: function() {
//     // 				progressBarText.stop(true);
//     // 			}
//     // 		}
//     // 	);
//     // });

//     // https://css-tricks.com/almanac/properties/o/outline/
//     // https://medium.com/@frontman/%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B8-%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-file-inputs-dea8e2de3ebc

//     $(".progress-bar").each(function(index, element) {
//       var progressBarText = $(element).find(".js-progressBar");
//       var progressBarTextValue = progressBarText.text();
//       var test = progressBarText.attr("data-percent");

//       progressBarText.animate(
//         {
//           width: progressBarTextValue
//         },
//         {
//           duration: 5000,
//           step: function(x) {
//             progressBarText.text(Math.round(x) + "%");
//           }
//         }
//       );
//     });

//     $(window).unbind("scroll.once");
//   }

//   // // http://anton.shevchuk.name/javascript/jquery-for-beginners-effects/
//   // // http://gearmobile.github.io/javascript/javascript-function-only-once/
//   // $(window).on('scroll', function() {

//   // 	var winT = $(window).scrollTop();
//   // 	var winH = $(window).height();
//   // 	var skillsT = skillsDiv.offset().top;

//   // 	console.log('winT', winT);
//   // 	console.log('winH', winH);
//   // 	console.log('skillsT', skillsT);

//   // 	if (winT + winH > skillsT) {

//   // 		$('.progress-bar').each(function(index, element) {

//   // 			var progressBarText = $(element).find('.progress-bar__text');
//   // 			var progressBarTextValue = progressBarText.text();

//   // 			progressBarText.animate(
//   // 				{
//   // 					width: progressBarTextValue
//   // 				},
//   // 				{
//   // 					duration: 5000,
//   // 					step: function(x) {
//   // 						progressBarText.text(Math.round(x) + "%");
//   // 					},
//   // 					complete: function() {
//   // 						progressBarText.stop(true);
//   // 					}
//   // 				}
//   // 			);
//   // 		});

//   // 		$(window).off('scroll');

//   // 	}
//   // });

//   //https://html5css.ru/howto/howto_js_scroll_indicator.php
//   //https://kingrayhan.github.io/LineProgressbar/demos.html
//   /*
//   http://jquerybook.ru/api/.animate()-fn14.html
//   http://w3pro.ru/book/spravochnik-jquery-api/metod-animate
//   http://w3.org.ua/jquery/funktsiya-animate-v-jquery/


//   http://natfolio.ru/portfolio.html
//   */

//   // $(document).ready(function(){
//   // });

//   // плавное перемещение страницы к нужному блоку
//   // $("nav li a").click(function () {
//   //   var currentElement = $(this);

//   //   // if($(this).hasClass('nav__link_active')) {
//   //   //   currentElement.removeClass('nav__link_active');
//   //   // }
//   //   currentElement.addClass('nav__link_active');

//   //   var attrCurrentLinkButton = $(this).attr("href");
//   //   var destination = $(attrCurrentLinkButton).offset().top;
//   //   currentElement.addClass('nav__link_active');

//   //   nav__link_active

//   //   $("body, html").animate({scrollTop: destination}, 800);
//   // });

//   // https://codemyui.com/simple-box-shadow-button-hover-animation/

//   // http://www.instantshift.com/2014/11/14/jquery-page-scroll-active-menu/
//   // https://stanhub.com/sticky-header-change-navigation-active-class-on-page-scroll-with-jquery/
//   // https://github.com/trungk18/Change-Navigation-Active-Class-on-Page-Scroll

//   //Navigation scroll
//   var $hashLink = $('a[href^="#"]');
//   var $navLink = $(".js-navLink");

//   $(document).on("scroll", onScroll);

//   $hashLink.on("click", function() {
//     $(document).off("scroll");

//     $navLink.each(function() {
//       $(this).removeClass("nav__link_active");
//     });
//     $(this).addClass("nav__link_active");

//     var target = this.hash;

//     $target = $(target);

//     $("html, body")
//       .stop()
//       .animate(
//         {
//           scrollTop: $target.offset().top + 2
//         },
//         500,
//         "swing",
//         function() {
//           window.location.hash = target;
//           $(document).on("scroll", onScroll);
//         }
//       );
//   });

//   function onScroll() {
//     var scrollPosition = $(document).scrollTop();

//     $navLink.each(function() {
//       var currentLink = $(this);
//       var refElement = $(currentLink.attr("href"));
//       // console.log('refElement.outerHeight()', refElement.outerHeight());
//       // console.log('refElement', refElement);

//       var $stickynav = $('.intro');
//       // console.log($stickynav.outerHeight());

//       if (
//         refElement.position().top <= scrollPosition + $stickynav.outerHeight() &&
//         refElement.position().top + refElement.outerHeight() > scrollPosition +  $stickynav.outerHeight()
//       ) {
//         $("nav ul li a").removeClass("nav__link_active");
//         currentLink.addClass("nav__link_active");
//       } else {
//         currentLink.removeClass("nav__link_active");
//       }
//     });
//   }

//   //ParticlesJS
//   particlesJS("particles-js", {
//     particles: {
//       number: {
//         value: 80,
//         density: {
//           enable: true,
//           value_area: 800
//         }
//       },
//       color: {
//         value: "#2ecc71"
//       },
//       shape: {
//         type: "circle",
//         stroke: {
//           width: 0,
//           color: "#000000"
//         },
//         polygon: {
//           nb_sides: 5
//         },
//         image: {
//           src: "img/github.svg",
//           width: 100,
//           height: 100
//         }
//       },
//       opacity: {
//         value: 0.5,
//         random: false,
//         anim: {
//           enable: false,
//           speed: 1,
//           opacity_min: 0.1,
//           sync: false
//         }
//       },
//       size: {
//         value: 3,
//         random: true,
//         anim: {
//           enable: false,
//           speed: 40,
//           size_min: 0.1,
//           sync: false
//         }
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: "#2ecc71",
//         opacity: 0.4,
//         width: 1
//       },
//       move: {
//         enable: true,
//         speed: 5,
//         direction: "none",
//         random: true,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//         attract: {
//           enable: false,
//           rotateX: 600,
//           rotateY: 1200
//         }
//       }
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: {
//           enable: true,
//           mode: "repulse"
//         },
//         onclick: {
//           enable: true,
//           mode: "push"
//         },
//         resize: true
//       },
//       modes: {
//         grab: {
//           distance: 400,
//           line_linked: {
//             opacity: 1
//           }
//         },
//         bubble: {
//           distance: 400,
//           size: 40,
//           duration: 2,
//           opacity: 8,
//           speed: 3
//         },
//         repulse: {
//           distance: 200,
//           duration: 0.4
//         },
//         push: {
//           particles_nb: 4
//         },
//         remove: {
//           particles_nb: 2
//         }
//       }
//     },
//     retina_detect: true
//   });


//   // var skillsDiv = $('.progress-bars');

//   // $(window).off('scroll', test);

//   // $(window).on('scroll', function(event) {

//   // 	var winT = $(window).scrollTop();
//   // 	var winH = $(window).height();
//   // 	var skillsT = skillsDiv.offset().top;

//   // 	console.log('winT', winT);
//   // 	console.log('winH', winH);
//   // 	console.log('skillsT', skillsT);

//   //   if (winT + winH > skillsT) {
//   // 		test();
//   // 	}
//   // });

//   // $(window).bind('scroll', function(){
//   // 	test();
//   // });

//   // function test() {
//   // 	//run code

//   // 	$(window).unbind('scroll.once')
//   // };

//   // $(window).off('scroll', test);

//   // if (winT + winH > skillsT) {
//   // 	test();
//   // }

//   // function test() {

//   // 	$('.progress-bar').each(function(index, element) {

//   // 		var progressBarText = $(element).find('.progress-bar__text');
//   // 		var progressBarTextValue = progressBarText.text();

//   // 		progressBarText.animate(
//   // 			{
//   // 				width: progressBarTextValue
//   // 			},
//   // 			{
//   // 				duration: 5000,
//   // 				step: function(x) {
//   // 					progressBarText.text(Math.round(x) + "%");
//   // 				},
//   // 				// complete: function() {
//   // 				// 	progressBarText.stop(true);
//   // 				// }
//   // 			}
//   // 		);
//   // 	});

//   // }

//   // //questions
//   // var $articleTitle = $('.article__title');
//   // $articleTitle.on('click', function() {
//   // 	$(this).toggleClass('article__title_active');
//   // 	$(this).siblings().slideToggle(500);
//   // });

//   // //consultation
//   // var $formConsultation = $('.js-formConsultation');
//   // $formConsultation.on('submit', function(event) {
//   // 	event.preventDefault();
//   // });

//   // //about
//   // var $videoButtonAbout = $('.js-videoButtonAbout');
//   // $videoButtonAbout.on('click', function() {
//   // 	$(this).parent().html('<iframe class="video__iframe" src="https://www.youtube.com/embed/98qgCnn1SfI?autoplay=1" allowfullscreen></iframe>');
//   // });

//   // //reviews
//   // var $videosReviews = $('.js-videosReviews');
//   // var $videoReview = $('.js-videoReview');
//   // var $videoReviewButton = $('.js-videoReviewButton');

//   // $videoReviewButton.on('click', function() {
//   // 	$(this).parent().html('<iframe class="video__iframe" src="https://www.youtube.com/embed/98qgCnn1SfI?autoplay=1" allowfullscreen></iframe>');
//   // });

//   // // //Button go-up
//   // // var $goUp = $('.go-up');
//   // // var $buttonAppear = 500; //the distance at which the button appears
//   // // var $html =  $('html');

//   // // $goUp.on('click', function() {
//   // // 	$html.animate({scrollTop: 0}, 1000);
//   // // });

//   // // function showGoUp() {

//   // // 	if(	($window.scrollTop() > $buttonAppear) ) {
//   // // 		$goUp.fadeIn();
//   // // 	}

//   // // 	else {
//   // // 		$goUp.fadeOut();
//   // // 	}
//   // // }

//   // // //Event scroll
//   // // $window.on('scroll', function() {
//   // // 	showNav();
//   // // 	showGoUp();
//   // // 	// console.log( $window.scrollTop() );
//   // // });

//   // // //Mask
//   // // var $inputTel = $('input[type=tel]');
//   // // $inputTel.mask('(000) 000 00 00');

// });
