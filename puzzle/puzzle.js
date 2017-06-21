
// to distinguish between the first
// click and the second click of two
// consecutive clicks
var first_click = true;

// the first image clicked
var first_image;

// if not_finished is true, there
// are still images to swao
var not_finished = true;

// process the click on the image
function click_on(name) {
	
	if(not_finished){
		if(first_click){
			first_image=document.getElementsByName(name)[0];
	    }
	    else{
			var this_image=document.getElementsByName(name)[0];
			var tmp=this_image.src;
			this_image.src=first_image.src;
			first_image.src=tmp;
			var tmp=this_image.name;
			this_image.name=first_image.name;
			first_image.name=tmp;
			is_finished();
 
	    }
        
		first_click=!first_click;
	}
	   
}

// returns true if the puzzle is solved
function is_finished() {  
	var current_order="";
			var images= document.getElementById("puzzle").images;
            for(var i=0; i<=12; i++){
            	current_order+= images[i].name;
    	        }

    	    if(current_order==="abcdefghijkl") {
    	    	document.getElementById("result").style.visibility= "visible";
    	    	not_finished=false;

    
    	}
}


