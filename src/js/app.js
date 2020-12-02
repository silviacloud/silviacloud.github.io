$(document).ready(function(){



  $(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $(".title").addClass("active");
        $('header').addClass("background");
    } else {
       $(".title").removeClass("active");
       $("header").removeClass("background");
    }
});


  $('#letsee').click(function(e){
    $(".story").addClass('activeopacity');
    $('.border').addClass('activeborder');
  });


    $('.trallala h3').on('click', function(){
      $(this).siblings('p').addClass('defined').toggle('slow');

    });

    $('#contacts').click(function(e){
      $(".contacts").addClass('activeright');
    });


});
