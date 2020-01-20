$(document).ready(
  function () {
    var owl = $('.carousel');
    owl.owlCarousel({
      items: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      loop: true,
      dots: true,
      nav: true,
      navText: ["<img src='./image/icon_pre.png'>", "<img src='./image/icon_next.png'>"],
    });

    var owl = $('.col-list');
    owl.owlCarousel({
      items: 5,
      autoplay: true,
      loop: true,
      dots: false,
      nav: true,
      navText: ["<img src='./image/icon_pre.png'>", "<img src='./image/icon_next.png'>"],
      responsiveClass:true,
      responsive:{
          0:{
              items:2,
          },
          576:{
              items:3,
          },
          768:{
            items:4,
          },
          992:{
            items:4,
          },
          1000:{
              items:4,
          }
      }
    });

  //sticky
    $('#main').waypoint(
      function(direction){
          if(direction == "down"){
              $('.header-bottom').addClass('sticky');
          }else{
              $('.header-bottom').removeClass('sticky');
          }
      },{
          offset: '-200px'
      }
  )

  // scroll show 
      
  var scroll = 1000,
  backtoTop = function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop > scroll){
      $('.ve_trang_dau').show();
    }else{
      $('.ve_trang_dau').hide();
    }
  };
  backtoTop();
  $(window).on('scroll',function(){
    backtoTop();
  })

  $('.ve_trang_dau').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 700);
  });
});

//SIDEBAR

$(".nav-bar").click(function(){
  $(".side-nav").css("width","250px");
})
$(".closebtn").click(function(){
  $(".side-nav").css("width","0");
})
$('.rotate').click(function() {
    $(this).toggleClass("down");
    $(this).next('.nav-sub-menu').slideToggle();
}); 
