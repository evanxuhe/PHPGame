<?php
	function extract_letter($s) {
		$a = explode(".",basename($s));
		$a = explode("-",$a[0]);
		return $a[1];
	}
	
	$puzzle = $_GET["puzzle"];
    $array = glob("puzzle/$puzzle/part-*.jpeg");
	shuffle($array);
	$title = file_get_contents("puzzle/$puzzle/title.txt");
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Puzzle</title>

    <meta charset="utf-8" />
    <link type="text/css" rel="stylesheet" href="puzzle.css" />
    <script type="text/javascript" src="puzzle.js"></script>
  </head>

<body>
	
<h1><?= $title ?></h1>

<img id="image" src="puzzle/<?= $puzzle ?>/image.jpeg" />

<div id="puzzle">
	<div>
<?php
	for ( $i = 0; $i < count($array); $i++ ) {
		if ( $i > 0 && $i % 4 == 0 ) {
?>
	</div><div>
<?php
		}
?>
      <img name="<?= extract_letter($array[$i]) ?>" onclick="click_on(this.name)" src="<?= $array[$i] ?>" />
<?php
	}
?>
	</div>
</div>

<div id="result">You solved the puzzle!!</div>

</body>
</html>
