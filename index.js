setInterval(function(){

  $('.preloader').fadeOut();
  },3000);





$(document).ready(function () {
  // reigns  slider

  function carousel() {
    slider = $(".reigns-carousel");
    slides = $(".slide");
    slides.each(() => {
      nb = document.createElement("button");
      nb.className = "nav-button";
      $(".action-bar").append(nb);
    });
    timer = slider.data("slide-time");
    count = 0;
    slides.eq(0).addClass("active-slide");

    function loop() {
      slides.eq(count).removeClass("active-slide");
      $(".nav-button").eq(count).css("border", "none");
      count++;
      if (count == slides.length) {
        count = 0;
      };
      slides.eq(count).addClass("active-slide");
      $(".nav-button").eq(count).css("border", "3px solid black");


    }
    myTimer = setInterval(loop, timer);

    $(".nav-button").click(function () {
      count = $(this).index();
      slides.eq($(this).index()).addClass("active-slide");
      $(".nav-button").eq(count).css("border", "3px solid black");
      clearInterval(myTimer);
      myTimer = setInterval(loop, timer);
      slides.each(function () {
        if ($(this).index() != count) {
          $(this).removeClass("active-slide");
          $(".nav-button").eq($(this).index()).css("border", "none");
        }
      });
    });
  }


  $('.owl-carousel').owlCarousel({
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    autoplaySpeed:500,
    loop:true,

      responsive: {
      0: {
        items: 1,
      },
      755: {
        items: 2,
      },
      1140: {
        items: 3,
      },
      1300: {
        items: 4,
      }
    }
  });

  //color handler 
  
  $('.color-theme').change(function()
  {
    color = $(this).val();
    $(':root').css('--color-30',color);
    document.getElementById("bottom-style").getSVGDocument().querySelectorAll("path")[0].setAttribute("fill", color)
  })


  //bottom style svg color handler
  color = $(':root').css("--color-30");
  document.getElementById("bottom-style").addEventListener("load", function () {
    var doc = this.getSVGDocument();
    var rect = doc.querySelectorAll("path"); // suppose our image contains a <rect>
    rect[0].setAttribute("fill", color);
  });

  //mobile nav bar controller
  $(".tab i").click(function () {

    child = $(this).parent().children(".navbar-dropdown").children(".parent-options")
    display = child.css("display");

    if (display == "none") {
      $(this).addClass("fa-angle-up");
      child.css("display", "block");
    }
    else {
      $(this).removeClass("fa-angle-up");
      child.css("display", "none");
    }

  });
  $(".parent-options li i").click(function () {
    child = $(this).parent().children(".child-options")
    display = child.css("display");

    console.log(child);

    if (display == "none") {
      $(this).addClass("fa-angle-up");
      child.css("display", "block");
    }
    else {
      $(this).removeClass("fa-angle-up");
      child.css("display", "none");
    }
  });


  carousel();
});
