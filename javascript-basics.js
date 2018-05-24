var context;
var x=100;
var y=100;
var dx=0.7;
var dy=0.7;

var tShower = 0;
var tTeeth = 0;

var dogs = ["Snoop", "Clifford", "Lassie", "Toto"];
var text = "";



function init() {

	context = myCanvas.getContext('2d');
	setInterval(draw, 10);


	for (var i = 0; i < dogs.length; i++) {
    	text += dogs[i] + "<br>";
	}
	document.getElementById("elem3").innerHTML = text;

}

function draw() {
	context.clearRect(0,0, 300,300);
	context.beginPath();
	context.fillStyle="#0000ff";

	// Draws a circle of radius 20 at the coordinates 100,100 on the canva	context.closePath();
	context.arc(x,y,20,0,Math.PI*2,true); 
	context.closePath();

	context.fill();

	// Boundary Logic
	if( x<0 || x>context.canvas.width) dx=-dx; 
	if( y<0 || y>context.canvas.height) dy=-dy; 

	x+=dx; 
	y+=dy;

	showCounter();
	console.log(tShower);
	console.log(tTeeth);

}

function takeShower() {
	tShower = tShower + 1;
}

function brushTeeth() {
	tTeeth = tTeeth + 1;
}

function showCounter() {
	document.getElementById("elem1").innerHTML = "times taken shower: " + tShower;
	document.getElementById("elem2").innerHTML = "times brushed teeth: " + tTeeth;

}









