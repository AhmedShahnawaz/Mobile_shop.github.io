  
$(document).ready(function(){

    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: false,
        loop:true,
        items: 1
    });

     // top  owl carousel
     $('#top-sale .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        nav:true,
        responsive:{
            0:{
                items:2 
            },
            600:{
                items:5
            },
            1000:{
                items:6
            }
        }
    })

      // isotope filter
      var $grid = $(".grid").isotope({
        itemSelector : '.grid-item',
        layoutMode : 'fitRows'
    });

    // filter items on button click
    $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue});
    })

    // card area owl carousel
    $('#shop-card .owl-carousel').owlCarousel({
      
        nav: false,
       
        responsive : {
            0: {
                items: 1,
                 dots: true, 
                  loop: true,
            },
            600: {
                items: 3
            }
        }
    })

      // blogs owl carousel
      $("#blogs .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    })

         // blogs owl carousel
         $("#product .owl-carousel").owlCarousel({
            loop: false,
            nav: false,
            dots: true,
            responsive : {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                }
            }
        })
    


    // product qty section
    let $qty_up = $(".qty .qty-up");
    let $qty_down = $(".qty .qty-down");
    // let $input = $(".qty .qty_input");

    // click on qty up button
    $qty_up.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() >= 1 && $input.val() <= 9){
            $input.val(function(i, oldval){
                return ++oldval;
            });
        }
    });

       // click on qty down button
       $qty_down.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() > 1 && $input.val() <= 10){
            $input.val(function(i, oldval){
                return --oldval;
            });
        }
    });



});

