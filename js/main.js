//"use strict";
document.addEventListener("DOMContentLoaded", function(){
   //открываем и закрываем отзывы
  const revBtn = document.querySelector('.reviews__btn');
  console.log(revBtn);

  const reviewsCards = document.querySelector('.reviews__cards');

  revBtn.onclick = function() {   
    reviewsCards.classList.toggle('open-cards');
    if (revBtn.innerText.toLowerCase() === 'показать') {
      revBtn.innerText = "скрыть";
    } else {
      revBtn.innerText = 'показать';
    }
  };

  //slider
  $('.sl1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,    
    arrows: true,
    prevArrow: '<div class="prev"><i class ="fa fa-caret-left fa-2x"></div>',
    nextArrow: '<div class="next"><i class ="fa fa-caret-right fa-2x"></div>',
    dots: false,
    fade: true,
    asNavFor: '.sl2'
  });

  $('.sl2').slick({
    centerMode: true,
    centerPadding: '50px',
    infinite: true,
    slidesToShow: 3,
    autoplay: false,
    dots: false,
    asNavFor: '.sl1',
    focusOnSelect: true,
    arrows: false
  });

  //замедление прокрутки из меню  
  $('.menu a').on('click', function (e) {
    e.preventDefault();
   
    $('.menu a').removeClass("active").filter(this).addClass("active");
 
    var selector = $(this).attr('href');
    var h = $(selector);
    $('html,body').animate({
      scrollTop: h.offset().top - 70
    }, 1000);

  });
 const catalogButtons = document.querySelector('.catalog__buttons');
  console.log(catalogButtons);
});