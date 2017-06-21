// the grid is sizexsize
var size = size;

// if grid[i][j] == -1, the cell (i,j) is empty, else grid[i][j]
// is the player number who ticked that cell (0 or 1)
var grid = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];

// the name of the players
var player_name = ["", ""];

// the image for each player
var player_image = ["O.png", "X.png"];

// the current player
var current_player = 0;

// the total number of clicks
var clicks = 0;

// if play is false, the clicks are disabled
var play = false;

// return the other player
function next(player) {
	return (player + 1) % 2;
}

// checks if the player filled the row
function winning_row(player, row) {


	for(var i=0;i<size;i++){
		if(grid[row][i]!==player){
			return false;
		}
	 }
    return true;
}

// checks if the player filled the column
function winning_column(player, column) {

	for(var i=0;i<size;i++){
		if(grid[i][column]!==player){
			return false;
		}
	 }
    return true;

}

// checks if the player filled the downward diagonal
function winning_diagonal_down(player) {

	for(var i=0;i<size;i++){
		if(grid[i][i]!==player){
			return false;
		}
	 }
    return true;



}

// checks if the player filled the upward diagonal
function winning_diagonal_up(player) {

	for(var i=0;i<size;i++){
		if(grid[i][2-i]!==player){
			return false;
		}
	 }
    return true;


}

// checks if the player filled one of the two diagonals
function winning_diagonal(player) {

	return winning_diagonal_up(player)||winning_diagonal_down(player);

}

// checks if the player filled a row, a coloumn or a diagonal
function is_winner(player) {

	for(var i=0;i<size;i++){
		if(winning_column(player, i)||winning_row(player,i)){
			return true;
		}
        if(winning_diagonal(player)){
	        return true;
        }
		return false;
	}
	


}

// display the result about the winner
function and_the_winner_is(player) {
    document.getElementById("final").style.visibility="visible";
	document.getElementById("winner").innerHTML=player_name[player];

}

// process the click on the object image
// in the cell (row,column) in the grid, 
function click_at(row, column, image) {
	if(play){
	image.src=player_image[current_player];
	grid[row][column]=current_player;
	msg("The current player is "+player_name[current_player]);
	}
	if (is_winner(current_player)) {
		and_the_winner_is(current_player);
	    play = false;}

	current_player=next(current_player);
}

// display a message in the element of ID "msg"
function msg(message) {

	document.getElementById("msg").innerHTML= message;

}

// set the name of the players
function set_players() {

	player_name[0]=document.getElementById("player1").value;
	player_name[1]=document.getElementById("player2").value;
	document.getElementById("first_player").innerHTML=player_name[0];
	document.getElementById("second_player").innerHTML=player_name[1];
	document.getElementById("start").style.visibility= "visible";

}
// allow the game to start
function start_game() {

	if(document.getElementById("check_second").value===1){
		current_player=1;
	}
	else{
		current_player=0;
	}
	
	play=true;

}

// process the play-again action
function play_again() {
	window.location.href("index.html");
	// document.getElementById("final").style.visibility="hidden";
	// play=true;



}

// process the quit action
function quit() {

}

