<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
	
	
	<!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.2/dist/css/uikit.min.css" />
<!-- UIkit JS -->
<script src="https://cdn.jsdelivr.net/npm/uikit@3.7.2/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.7.2/dist/js/uikit-icons.min.js"></script>
<style>body {
  background: #F3F3F3;
  
}
.uk-button-text::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 100%;
  border-bottom: 2px solid #1E87F0
}
.uk-overlay-primary {
  background: rgba(13, 128, 242, 0.806);
}
.dustcard-pad-remove img {
 padding: -40px !important
}
pre {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}</style> 
<title>Signiwis | SAP Consulting</title>
    <link rel="icon" href="./assets/img/icon.png" type="image/x-icon">
  </head>

<body>
	
	
	<div style="max-width: 1200px" class="uk-container"><!-- start container -->
		<article>
					
			<sction>
				<header class="uk-text-center">
				<img src="./assets/img/brand.png" alt="SIGNIWIS" style="height: 50px;">
				<h1 class="uk-text-center uk-text-primary uk-text-light">
					
					Fun @ Work
					</h1></header>
				 <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-3@l uk-grid-medium" uk-grid="masonry: true"  uk-lightbox="animation: slide">     
<?php
   $galleryDir = 'gallery/';
   foreach(glob("$galleryDir{*.jpg,*.gif,*.png,*.tif,*.jpeg}", GLOB_BRACE) as $photo)
   {echo "<a  href=\"$photo\">\n" ;echo "<img style=\"padding:7px\" class=\"uk-card uk-card-default uk-card-hover uk-card-body\" src=\"$photo\">"; echo "</a>";}?> 
				    
          </div>			
			</sction>
			<hr class="uk-divider-icon uk-margin-large-top uk-margin-large-bottom">					
		
		</article>
		
		
	</div><!-- end container -->
 
	
</body>

</html>