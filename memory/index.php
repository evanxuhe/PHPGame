<?php
	$array1 = glob("images/*.png");
	$array2 = glob("images/*.png");
	$array = array_merge($array1,$array2);
	shuffle($array);
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Memory</title>

    <meta charset="utf-8" />
    <link type="text/css" rel="stylesheet" href="memory.css" />
    <script type="text/javascript" src="memory.js"></script>
  </head>

<body>
	
<h1>Memory</h1>

<div id="grid">
	<div>
<?php
	for ( $i = 0; $i < count($array); $i++ ) {
		if ( $i > 0 && $i % 4 == 0 ) {
?>
	</div><div>
<?php
		}
?>
      <img src="question-mark.png" onclick="click_image(<?= $i ?>)" name="<?= $array[$i] ?>" />
<?php
	}
?>
	</div>
</div>

<div id="result">You succeed in <span id="count"> </span> steps!</div>

</body>
</html>
