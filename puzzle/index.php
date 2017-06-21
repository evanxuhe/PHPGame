<?php
    $array = glob("puzzle/*");
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Puzzle</title>
    <meta charset="utf-8" />
    <link type="text/css" rel="stylesheet" href="puzzle.css" />
  </head>

<body>
	
<h1>Puzzle</h1>

<h2>Choose your puzzle!</h2>

<?php
	foreach ( $array as $puzzle ) {
?>
	<div class="small">
		<a href="puzzle.php?puzzle=<?= basename($puzzle) ?>">
			<img src="<?= "$puzzle/image.jpeg" ?>" alt="Image" />
		</a>
		<h3><?= file_get_contents("$puzzle/title.txt") ?></h3>
	</div>	
	
<?php } ?>

</body>
</html>
