(function ($) {
	$(document).ready(function(){

		// hide .navbar first
		$(".navbar").hide();

		// fade in .navbar
		$(function () {
			$(window).scroll(function () {

				// set distance user needs to scroll before we start fadeIn
				if ($(this).scrollTop() > 100) {
					$('.navbar').fadeIn();
				} else {
					$('.navbar').fadeOut();
				}
			});
		});

	});
}(jQuery));

$(document).ready(function(){		
    
    parallax_init();
	
	setTimeout(function(){draw_hr("#svg_hr");},1500);
	
	if($(window).width() > 768){
		var svg_arr = [200, 300, 670, 1000];
	}
	if($(window).width() <= 768){
		var svg_arr = [50, 455, 1150, 1650];
	}
	
	$(function(){
		var trig_a, trig_b, trig_c, trig_d = false;
		
		$(window).scroll(function() {
			console.log($(this).scrollTop());

			if ($(this).scrollTop() >= svg_arr[0] && !trig_a) {
				trig_a = true;
				
			}
			if ($(this).scrollTop() >= svg_arr[1] && !trig_b) {
				trig_b = true;
				draw_single_hr("#svg_hr_b", '#de9100'); 
				svg_b_animate();
			}
			if ($(this).scrollTop() >= svg_arr[2] && !trig_c) {
				trig_c = true;
				draw_single_hr("#svg_hr_c", '#cc0e48'); 
				svg_c_animate();
			}
			if ($(this).scrollTop() >= svg_arr[3] && !trig_d) {
				trig_d = true;
				svg_a_animate();
			}
		});
	});
	
    function draw_hr(hr_id){
        var snap_hr = Snap(hr_id); 

        var snap_hr_path = snap_hr.path("m 3,2," + $("#svg_hr").width() + ",0");
        var snap_hr_path_b = snap_hr.path("m 3,8," + $("#svg_hr").width() + ",0");
        var snap_hr_path_c = snap_hr.path("m 3,14," + $("#svg_hr").width() + ",0");

        setTimeout(function () { draw_svg(snap_hr_path, 1000, 1, '#2182f2'); }, 0);
        setTimeout(function () { draw_svg(snap_hr_path_b, 1000, 1, '#de9100'); }, 100);
        setTimeout(function () { draw_svg(snap_hr_path_c, 1000, 1, '#cc0e48'); }, 200);
    }
	
	function draw_single_hr(hr_id, line_color){
		var snap_hr = Snap(hr_id); 

		var snap_hr_path = snap_hr.path("m 3,2," + $("#svg_hr").width() + ",0");
		setTimeout(function () { draw_svg(snap_hr_path, 1000, 1, line_color); }, 0);
	}
    
    function parallax_init(){
        
        // init controller
        var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $(window).height()*2}});

        // build scenes
        new ScrollScene({triggerElement: "#parallax1"})
        .setTween(TweenMax.from("#parallax1 > div", 1, {top: "-80%", ease: Linear.easeNone}))
        .addTo(controller);

        new ScrollScene({triggerElement: "#parallax2"})
        .setTween(TweenMax.from("#parallax2 > div", 1, {top: "-95%", ease: Linear.easeNone}))
        .addTo(controller);
		/*

        new ScrollScene({triggerElement: "#parallax3"})
        .setTween(TweenMax.from("#parallax3 > div", 1, {top: "-80%", ease: Linear.easeNone}))
        .addTo(controller)
        .addIndicators({zindex: 1, suffix: "3"});*/
    }
});


