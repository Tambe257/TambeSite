/* Fade in elements on scroll */

$(function() {
    $(window).scroll(function() {
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "50" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 20;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
        }); 
    
    });
});


/* Fade in Welcome Text on load */

$('.welcome-text').hide().fadeIn(1000);

/* Fade in Welcome Text on load */

$('.project').hide().fadeIn(1000);



/* Animate social icons in the bottom section on scroll */
$(function() {
    $(window).scroll( function(){
        $('#bottom').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "50" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 10;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $('#twitter').addClass('animate');
                $('#mail').addClass('animate');
                    
            }
        }); 
    
    });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});