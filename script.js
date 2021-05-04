

var imgObj = null;
function init(){
    imgObj = document.getElementById('bruno');
    imgObj.style.position= 'relative';
    imgObj.style.left = '0px';
 }    
 function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';


 }
 window.onload =init;


 let mylie = document.getElementById("mylie");

// This handler will be executed every time the cursor
// is moved over a different list item
mylie.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.imgObj = "bruno";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);  
