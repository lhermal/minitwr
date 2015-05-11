$(function(){ 

		  if (!!$('.sticky').offset()) { //check si il y a un .sticky

		    var stickyTop = $('.sticky').offset().top; 

		    $(window).scroll(function(){ 

		      var windowTop = $(window).scrollTop();

		      if (stickyTop < windowTop){
		        $('.sticky').css({ position: 'fixed', top: 0 });
		        $('#secDroite').css({ right: 5 });
		      }
		      else {
		        $('.sticky').css('position','static');
		      }
		    });

		  }

		});
