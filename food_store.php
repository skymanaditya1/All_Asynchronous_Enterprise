<?php
header('Content-Type: text/xml')
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
	# Gets the food item from the GET request
	$education=$_GET['education'];
	# Usually this list is taken from the database
	$educationArray = array('Primary', 'Secondary', 'Tertiary');
	if(in_array($food, $foodArray))
		echo 'We do offer that education ' .$education.'!';
	elseif($education=='')
		echo 'Enter the education that you want to pursue'
	else
		echo 'Sorry, we do not offer that education '.$education.'!';
echo '</response>';
?>