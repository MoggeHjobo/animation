
var ctx;
var canvas;
var message="Jobbar i Git";
var pixlar = 10;
var f = 15.5;



function init()
{
	canvas = document.getElementById("yta");
	ctx = canvas.getContext("2d");

	setInterval("draw();",100);
}

function draw()
{
	ctx.fillStyle = "rgb(0,100,23)";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.fillStyle ="#230045";
	
	var x = 20;

	for(i=0;i<message.length;i++)
	{
		
		ctx.fillStyle = "rgb(" + r() + "," + r() + "," + r() + ")";
		ctx.font= pixlar+"px Arial";
		var width = ctx.measureText(message.substring(i,i+1)).width;
		ctx.fillText(message.substring(i,i+1),x,100);
		x+=width;
		pixlar+=f;
		//Longer intervalls
				if(pixlar >= 90 || pixlar <= 2)
							f*=-1;
	}
}


function r()
{
	return Math.floor((Math.random() * 256) );
}
