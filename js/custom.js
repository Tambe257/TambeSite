/* Fade in elements on scroll */

$(function() {
    $(window).scroll( function(){
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
            bottom_of_window = bottom_of_window + 20;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $('#twitter').addClass('animate');
                $('#mail').addClass('animate');
                    
            }
        }); 
    
    });
});