<?php
    $array = glob("./*");
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Games</title>
    <meta charset="utf-8" />
    <link type="text/css" rel="stylesheet" href="puzzle.css" />
  </head>

<body>
	
<h1>GAMES</h1>

<h2>Choose your game:</h2>

<ul>
<?php
	foreach ( $array as $game ) {
		if ( is_dir($game) ) {
?>
	<li>
		<a href="<?= $game ?>"><?= basename($game) ?></a>
	</li>
<?php }} ?>
</ul>

</body>
</html>
