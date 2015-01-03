
    function svg_b_animate(){

    var svg_b = Snap("#svg_b");            

    $('#php_logo').fadeIn("slow");
    var php_logo = svg_b.selectAll('#php_logo path');  
    var sql_logo = svg_b.selectAll('#sql_logo path');  
    var ci_logo = svg_b.selectAll('#ci_logo path');  
    var git_logo = svg_b.select('#git_logo');  
    
    setTimeout(function () {
        
        php_logo.animate({ transform: 's0.48,198,-100' }, 1600, mina.bounce );  
        draw_fork();                        
        anim_final()
    }, 2500);
    
    function anim_final(){
        setTimeout(function () {
                        
            window.svg_group.animate({ transform: 's0, 160, 145' }, 1000, mina.easeinout );
            
            setTimeout(function () {
                
                sql_logo.animate({ transform: 't-20,-50' }, 1000, mina.easeinout );  
                ci_logo.animate({ transform: 't-270,0' }, 1300, mina.easeinout );  
                git_logo.animate({ transform: 't-200,-125' }, 1600, mina.easeinout );  
                
                setTimeout(function () {
                    php_logo.animate({ transform: 't120,0' }, 2000, mina.bounce );  
                }, 900);
            }, 600);
        }, 5000);
    }
    
    function draw_fork(){                
        
        setTimeout(function () {

            $('#sql_logo').delay(400).fadeIn('slow'); 
            $('#ci_logo').delay(800).fadeIn('slow'); 
            $('#git_logo').delay(1200).fadeIn('slow');      
            
            var my_path_a = svg_b.path("m 160,145 42,32").attr({
                id: "my_path_a",
            });
            var my_path_b = svg_b.path("m 160,145 -42,32").attr({
                id: "my_path_b",
            });
            var my_path_c = svg_b.path("m 160,145 0,64").attr({
                id: "my_path_c",
            });         

            var circle_a = svg_b.circle(160,145,4).attr({fill: "#555", });         
            var circle_b = svg_b.circle(160,145,4).attr({fill: "#555", });        
            var circle_c = svg_b.circle(160,145,4).attr({fill: "#555", });        
            var circle_d = svg_b.circle(160,145,1).attr({fill: "#555", }); 
            
            window.svg_group = svg_b.group(my_path_a, my_path_b, my_path_c, circle_a, circle_b, circle_c, circle_d);

            circle_d.animate({ transform: 's6, 160, 145' }, 2000, mina.bounce );
            draw_svg(my_path_a, circle_a);
            draw_svg(my_path_b, circle_b);
            draw_svg(my_path_c, circle_c);   

            function draw_svg(my_path, my_circle){

                var lenB = my_path.getTotalLength();

                // SVG B - Animate Path
                my_path.attr({
                    stroke: '#333',
                    strokeWidth: 2,
                    fill: 'none',
                    // Draw Path
                    "stroke-dasharray": lenB + " " + lenB,
                    "stroke-dashoffset": lenB
                }).animate({"stroke-dashoffset": 0}, 2000,mina.bounce);

                // SVG B - Circle

                setTimeout( function() {
                    Snap.animate(0, lenB, function( value ) {
                        movePoint = my_path.getPointAtLength( value );
                        my_circle.attr({ cx: movePoint.x, cy: movePoint.y }); // move along path via cx & cy attributes
                    }, 2000,mina.bounce);
                });
            }
        }, 1000);
    }
        
    }