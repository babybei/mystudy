var CANVAS_HEIGHT=500,CANVAS_WIDTH=500;
var mycanvas,context;
window.onload=function(){
	createCanvas();
	//drawRect();
	drawImage();
}
function createCanvas(){
	document.body.innerHTML="<canvas class=\"canvas\" id=\"mycanvas\" height=\""+CANVAS_HEIGHT+"\" width=\""+CANVAS_WIDTH+"\"></canvas>";
	mycanvas=document.getElementById("mycanvas");
	context=mycanvas.getContext("2d");
}

function drawRect(){
	context.fillStyle="#FF0000";
	//context.rotate(45);
	//context.translate(200,200);
	context.scale(2,0.5);
	context.fillRect(0,0,200,200);
}

function drawImage(){
	var img=new Image();
	img.onload=function(){
		context.drawImage(img,0,0);
	}
	img.src="../img/3.jpg";
}