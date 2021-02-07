var modal = document.getElementById("modal");

var img = document.getElementsByClassName("gallery-item-img");

var span = document.getElementById("close");

var back_arrow = document.getElementById("ba");
var front_arrow = document.getElementById("fa");


var current = 0;


//scrolling through photos
$(document).ready(function(){
    
   $(back_arrow).click(function(){
       if(current < 1){
           current = img.length;
       }
       current = current - 1;
       document.getElementsByClassName("modal-img")[0].src = img[current].src;
       console.log(current + "b");
   })
   $(front_arrow).click(function(){
    current = current + 1;
    if(current >= img.length){
        current = 0;
    }
    document.getElementsByClassName("modal-img")[0].src = img[current].src; 
    console.log(current);
    
})
   
});

//adds event listeners to each gallery item
//displays image clicked on in modal 
for (let i = 0; i < img.length; i++){
    img[i].addEventListener("click", function(){
        modal.style.display = "flex";
        document.getElementsByClassName("modal-img")[0].src = 
        img[i].src;
        current = i;
    });
}

/*
//able to scroll through photos if user clicks on the first image 
//need to be able to wrap around
back_arrow.addEventListener("click", function(){
    current = current - 1;
});
front_arrow.addEventListener("click", function(){
    current = current + 1;
    if (current == 12){ //need to find a way to do this with any number of imgs
        current = 0;
    }
});
*/


//closes modal if user clicks on x
span.onclick = () => {
    modal.style.display = "none";
}


//closes modal if user clicks outside of it
window.onclick = event => {
    if (event.target == modal){
        modal.style.display = "none"; 
    }
}


//need to be able to detect which img is clicked on, and then
//display the image clicked on in the modal 