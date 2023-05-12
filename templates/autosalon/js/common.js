$(function(){
	$('.index-brands-block .bottom-link a').click(function() {
		$(this).parent().hide();
		$('.index-brands-block .row .col-3').show();
	});
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '.slider-nav'
	});
	window.showCreditPopup = function(e, t, i) {
                $("#credit-popup-plate .popup__image").attr("src", ""),
                $.fancybox.open({
                    src: "#credit-popup-plate",
                    type: "inline",
                    opts: {
                        beforeShow: function(n, s) {
                            $("#credit-popup-plate .popup__car_id").val(e),
                            $("#credit-popup-plate .popup__image").attr("src", t),
                            $("#credit-popup-plate .popup__price").text(i + " руб/мес")
                        }
                    }
                })
            };
	$('.slider-nav').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  arrows: false,
	  focusOnSelect: true,
	  responsive: [
	      {
	        breakpoint: 1200,
	        settings: {
	          slidesToShow: 5
	        }
	      },
	      {
	        breakpoint: 768,
	        settings: {
	          slidesToShow: 4
	        }
	      }
	    ]
	});
});