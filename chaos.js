var canvas =document.querySelector("#canvas");
var context = canvas.getContext("2d");

var N;
var ratio;
var PADDING=50;
var RAD;    
var POINTS=[];
var rx=Math.random() * canvas.width;;
var ry=Math.random() * canvas.height;

function start(){
   N=document.querySelector('#num').value;
   ratio=document.querySelector('#factor').value;

   let W = canvas.width;
    let H = canvas.height;
    let h = H - PADDING;
    let origin = [W/2, h/2+PADDING/2];
    let rad = h/2;
    let theta = (Math.PI*2)/N; 
    let target = Math.floor(Math.random() * N);

    for(var i=0;i<N;i++){
        let currentTheta = i*theta - (Math.PI/2); //rotating by 90 degs for better aesthetics
        POINTS[i] = [origin[0] + rad*Math.cos(currentTheta), origin[1]+rad*Math.sin(currentTheta)];
        circle(POINTS[i][0],POINTS[i][1],10,"cyan")
    }

    setInterval(function() {
        rx=(POINTS[target][0]-rx)*ratio +rx;
        ry=(POINTS[target][1]-ry)*ratio +ry;
        circle(rx,ry,1,"cyan")
        target = Math.floor(Math.random() * N);
	},10/40);
}


window.onload= function(){

}

function circle(x,y,r,color){
   
    context.fillStyle=color;
	context.beginPath();
	context.arc(x,y,r,0,Math.PI*2);
	context.fill();
}


