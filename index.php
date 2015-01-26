<?php $base_url = "http://127.0.0.1/tests/svg_test/"?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="msapplication-tap-highlight" content="no"/> 
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/bootstrap.min.css">
<!--		<link rel="stylesheet" href="css/waves.css">-->
	
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<link href='http://fonts.googleapis.com/css?family=Cookie' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
	
	<!-- parallax -->
        <link rel="stylesheet" href="css/style.css" type="text/css">
        <link rel="stylesheet" href="css/examples.css" type="text/css">
    
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

        <!--[if lt IE 9]>
            <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
            <script>window.html5 || document.write('<script src="js/vendor/html5shiv.js"><\/script>')</script>
        <![endif]-->
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->        
        
        <div id="content-wrapper">
            <div id="example-wrapper">
                <div class="scrollContent">
                    
                    <section class="demo">
<!--                        <div class="spacer s0"></div>-->
                        <div id="page-down-arrow"><div id="down-arrow-icon"></div></div>
						<div class="responsive-circle">
<!--							<img src="svg/head.svg" id="h_svg" alt="" class="head-svg">-->
<!--							<object type="image/svg+xml" id="outer_head_svg" data="svg/head.svg">Your browser does not support SVG</object>-->
							<!--							<svg id="svg_head" width="100%" height="100%"></svg>-->
								<?php echo file_get_contents('svg/head.svg'); ?>
						</div>
						
                        <div id="parallax1">
                            <div style="background-image: url(img/header.jpg); background-size: cover;">                                
                            </div>
                        </div>
                        
                        <div>
                            <div class="svg-container">  
                                                                
                                <div class="container">
                                    <!-- Example row of columns -->
                                    <div class="row">
                                        <br/>
                                        <br/>
                                        <div class="col-sm-12">
                                            <svg id="svg_hr" width="100%" height="20px"></svg>
                                        </div>
										
										<div class="clearfix"></div>
										
										<div class="col-md-8">
											<h2><i class="fa fa-code"></i> Programming Languages</h2>
											<div class="hr"></div>
											<p>Languages - PHP, Java, Python, ASP.Net, VB VB.Net, Visual Basic<br/>
												Fremeworks - Codeigniter, Slim<br/>
												Database -  SQL(mySQL msSQL)  <br/>
												SCM (Version Control) - Git, SVN
											</p>
										</div>
										<div class="col-md-4 text-center">
                                            <?php echo file_get_contents('svg/pl_a.svg'); ?>
                                        </div>
										<div class="clearfix"></div><br/>
										
										<div class="col-sm-12">
											<svg id="svg_hr_b" width="100%" height="20px"></svg>
										</div>
										
										<div class="col-sm-12 col-md-8 col-md-push-4">
											<h2><i class="fa fa-code"></i> Programming Languages</h2>
											<div class="hr"></div>
											<p> More Languages - Javascript (JQuery, JQuery UI &amp; Mobile, AJAX) <br/>
												The Basics - HTML, XML, CSS (LESS, SCSS)<br/>
												FrontEnd Frameworks - BootStrap, Zurb Foundation<br/>
												Task Runners - Bower, Gulp<br/>
												Social API's - Google, LinkedIn, FaceBook &amp; Twitter<br/>
												CMS - WordPress

											</p>
										</div>      
										<div class="col-sm-12 col-md-4 col-md-pull-8 text-center">
											<?php echo file_get_contents('svg/pl_b.svg'); ?>
										</div>
										                                  										
										<div class="clearfix"></div><br/>	
										<div class="col-sm-12">
											<svg id="svg_hr_c" width="100%" height="20px"></svg>
										</div>
										<div class="col-md-8">
											<h2><i class="fa fa-laptop"></i>  
												Operating Systems
											</h2>
											<div class="hr"></div>
											<p>MS-Windows (XP, Vista, 7, 8)<br/> 
												Linux (Ubuntu, Fedora, Mint, Raspbian, ElementaryOS)<br/>
												Mac OS
											</p>
										</div>
										<div class="col-md-4 text-center">
											<?php echo file_get_contents('svg/os.svg'); ?>
										</div>
										
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        

                    </section>
                    
                    <div class="spacer s_viewport"></div>
                </div>
            </div>
        </div>
            
<footer>
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="js/vendor/bootstrap.min.js"></script>

	<!-- parallax -->
	<script type="text/javascript" src="js/_dependent/greensock/TweenMax.min.js"></script>
	<script type="text/javascript" src="js/_examples/general.js"></script>
	<script type="text/javascript" src="js/_examples/highlight.pack.js"></script>
	<script type="text/javascript" src="js/_examples/modernizr.custom.min.js"></script>
	<script type="text/javascript" src="js/vendor/jquery.scrollmagic.js"></script>
	<script type="text/javascript" src="js/vendor/jquery.scrollmagic.debug.js"></script>

	<script src="js/vendor/snap.svg-min.js"></script>
<!--
	<script src="js/waves.js"></script>		
	
	<script type="text/javascript">
		var w = new Waves();
		w.displayEffect();
	</script>
-->
	<script src="js/svg_head.js"></script>
	<script src="js/svg_a.js"></script>
	<script src="js/svg_b.js"></script>
	<script src="js/svg_c.js"></script>
	<script src="js/main.js"></script>
    
</footer>
</body>
</html>