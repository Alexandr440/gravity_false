$(document).ready(function(){
    
          
    //slider
    $('.sl1').slick({
        infinite: true,
        slidesToShow: 1 ,
        slidesToScroll: 1,
        //autoplay: true,
        //autoplaySpeed: 1000,
        /*lazyLoad: 'ondemand',*/
        //speed: 500,
        //loop: true,
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
        slidesToShow: 3 ,
        autoplay: false,
        dots: false, 
        asNavFor: '.sl1',
        focusOnSelect: true,
        arrows: false,
        
               

    });


    
    //замедление прокрутки из меню

    $('.menu a ').on('click', function(e){
		e.preventDefault();

		//прикручиваем актив класс
		$('.menu a').removeClass("active").filter(this).addClass("active");


			//прокрутка 
		var selector = $(this).attr('href');
		
			
		var h = $(selector);		

		$('html,body').animate({
			scrollTop: h.offset().top-70    
		}, 1000);

    });

    



  });






