
// the array of the path of the images
var array = [];

// if clicked[i] is true, array[i] if visible
var clicked = [];

// to distinguish between the first
// click and the second click of two
// consecutive clicks
var first_click = true;

// the index in the array of the first image clicked
var first_index = 0;

// the total number of pairs of clicks
var clicks_number = 0;

// the number of good pairs of clicks
// (i.e. clicks which revealed two identical images)
var good_clicks_number = 0;

// change the content of the attribute src of the two
// images at index i and j to the question mark image
function hide(i, j) {
	document.images[i].src="question-mark.png";
	document.images[j].src="question-mark.png";
}

// process the click on image at index n
function click_image(n) {
	if(!clicked[n]){
		if(first_click){
			first_index=n;
			document.images[n].src=array[n];

		}
		else{
			document.images[n].src=array[n];			
			if(array[n] === array[first_index]){
				good_clicks_number+=1;
				clicks_number+=1;
			}
			else{
				
				setTimeout(hide,500,n,first_index);
				clicks_number+=1;
			}
		if(good_clicks_number==8){
			document.getElementById("result").style.visibility = "visible";
			document.getElementById("count").innerHTML = clicks_number;
		}

		}
		first_click = !first_click;


	}



}

// fill the array with the content of the name
// attribute of the images
function fill_array() {
	for(var i=0;i<16;i++){
		array.push(document.images[i].name);
		clicked.push(false);

	}

}
function write_file(){
}
// to fill the array before the game starts
window.onload = fill_array;

