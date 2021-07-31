var canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
var color="black";
var width=1;
var last_position_of_y;
var last_position_of_x;
var MouseEvent="empty"
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
   MouseEvent="mousedown";
   console.log(MouseEvent);
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    MouseEvent="mouseleave";
    console.log(MouseEvent);
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    MouseEvent="mouseleave";
    console.log(MouseEvent);
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    current_position_of_mouseX=e.clientX-canvas.offsetLeft
    current_position_of_mouseY=e.clientX-canvas.offsetTop
    if (MouseEvent=="mousedown"){
  ctx.beginPath();
  ctx.strokeStyle=color;
  ctx.lineWidth=width;
  ctx.moveTo(last_position_of_x,last_position_of_y);
  ctx.lineTo(current_position_of_mouseX,current_position_of_mouseY);
  ctx.stroke();
  console.log(last_position_of_x+"y="+last_position_of_y)
    }
  last_position_of_x=current_position_of_mouseX
  last_position_of_y=current_position_of_mouseY
}




