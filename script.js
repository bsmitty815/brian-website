

var imgObj = null;
function init(){
    imgObj = document.getElementById('bruno');
    imgObj.style.position= 'relative';
    imgObj.style.left = '0px';
 }    
 function moveRight(){
   const leftNumbers = imgObj.style.left.replace("px", "");
   const left = parseInt(leftNumbers, 10);
   if (left < 700) {
      imgObj.style.left = `${left + 30}px`;
   }
}
 window.onload =init;
// above code is for the bruno slide



/*
function myOverFunction() {
   document.getElementById("mylieImg").innerHTML = "<img src=\"mylie.jpg\">";
 }
 function onMouseOut() {
   document.getElementById("mylieImg").innerHTML = "mylie";
 }
 */
// above code is for the mylie rollover but currently using the css rollover because it runs smoother



 
