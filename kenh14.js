$(document).ready(function(){
      if( getCurrentScroll()>=72){
        $('.menu-wrapper').addClass('scroll-menu');
      }
      var mySwiper = new Swiper ('.hot-list-new', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 2,
        spaceBetween: 10,
        
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        
      })

      var swiper_daily = new Swiper('.daily', {
        direction: 'vertical',
        loop: false,
        slidesPerView: 5,
        spaceBetween:10,
        mousewheel: true,
        scrollbar: { 
          el: '.swiper-scrollbar',
          hide: false,
        },
        
      });
      var swiper_mutex = new Swiper('.mutex-frame', {
        direction: 'vertical',
        loop: false,
        slidesPerView:1,
        
        mousewheel: true,
        scrollbar: { 
          el: '.swiper-scrollbar',
          hide: false,
        },
        
      });
     // code for scroll menu bar
      $('.homeitem').hide();
      $(window).scroll(function(){
          var scroll =getCurrentScroll();
          // for menu bar 
          if( scroll>=90){
            $('.menu-wrapper').addClass('scroll-menu');
            $('.homeitem').show();
          }
          else{
            $('.menu-wrapper').removeClass('scroll-menu');
            $('.homeitem').hide();
          }
          // for discussion
          if( scroll>=6000 & scroll<=6800 ){
            $('#discuss-news-frame').addClass('discuss-scroll');
           
          } 
          else if (scroll>6800 && scroll<=7020) {
            $('#discuss-news-frame').removeClass('discuss-scroll');
            $('#discuss-news-frame').addClass('discuss-save');
           
          }
          else{
            $('#discuss-news-frame').removeClass('discuss-scroll');
            $('#discuss-news-frame').removeClass('discuss-save');
           
          }
          // for sroll adv
          if( scroll>=7900 && scroll<=15500){
            $('.right-adv').addClass('scroll-adv');
            
          }
          else{
            $('.right-adv').removeClass('scroll-adv');
           
          }
        console.log( scroll);
      });
     function getCurrentScroll(){
       return window.pageYOffset || document.documentElement.scrollTop;
     } 
    
     // hover swiper contrainer
     $(".swiper-container").hover(function(){
      $(".swiper-button-prev").css("left", "0px");
      console.log('adsasd222');
      }, function(){
        $(".swiper-button-prev").css("left", "-35px");
        console.log('adsasd');
    });
    

    // auto playr mutex video
    // var mutexs = [
    //   "pbb.mp4",
     
    // ];
    // function playArray(index,ele,array,listener){
    //     ele.removeEventListener(listener||0);
    //     ele.src = array[index];
    //     ele.load();
    //     ele.play();
    //     index++;
    //     if(index>=array.length){
    //         index=0;
    //     }
    //     listener = ele.addEventListener('ended',function(){
    //         playArray(index,ele,array,listener);
    //     },false);
    // }
    // playArray(0,$('.mutex-list-left video'),mutexs);
});

