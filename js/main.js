$(document).ready(function(){
    

    
    parallax_init();
    draw_hr("#svg_hr");   
    
        
    svg_a_animate();
    svg_b_animate();
    svg_c_animate(); 
    
    
    function draw_hr(hr_id){
        var snap_hr = Snap(hr_id); 

        var snap_hr_path = snap_hr.path("m 3,2," + $("#svg_hr").width() + ",0");
        var snap_hr_path_b = snap_hr.path("m 3,8," + $("#svg_hr").width() + ",0");
        var snap_hr_path_c = snap_hr.path("m 3,14," + $("#svg_hr").width() + ",0");

        setTimeout(function () { draw_svg(snap_hr_path, 1000, 1, '#2182f2'); }, 0);
        setTimeout(function () { draw_svg(snap_hr_path_b, 1000, 1, '#de9100'); }, 100);
        setTimeout(function () { draw_svg(snap_hr_path_c, 1000, 1, '#cc0e48'); }, 200);
        
        setTimeout( function() { snap_hr_path.animate({stroke: '#cc0e48'}, 600, mina.easeinout); }, 2000);
        //setTimeout( function() { snap_hr_path_b.animate({stroke: '#de9100'}, 600, mina.easeinout); }, 200);
        setTimeout( function() { snap_hr_path_c.animate({stroke: '#2182f2'}, 600, mina.easeinout); }, 2000);
    }
    
    function parallax_init(){
        
        // init controller
        var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $(window).height()*2}});

        // build scenes
        new ScrollScene({triggerElement: "#parallax1"})
        .setTween(TweenMax.from("#parallax1 > div", 1, {top: "-95%", ease: Linear.easeNone}))
        .addTo(controller);
        //.addIndicators({zindex: 1, suffix: "1"});

        /*new ScrollScene({triggerElement: "#parallax2"})
        .setTween(TweenMax.from("#parallax2 > div", 1, {top: "-80%", ease: Linear.easeNone}))
        .addTo(controller)
        .addIndicators({zindex: 1, suffix: "2"});

        new ScrollScene({triggerElement: "#parallax3"})
        .setTween(TweenMax.from("#parallax3 > div", 1, {top: "-80%", ease: Linear.easeNone}))
        .addTo(controller)
        .addIndicators({zindex: 1, suffix: "3"});*/
    }
});