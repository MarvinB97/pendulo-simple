var h3 = document.getElementsByTagName('time')[0];
var start = document.getElementById('strt');
var stop = document.getElementById('stp');
var reset = document.getElementById('rst');

var bar=document.getElementById('barra');//bar
var obj = document.getElementById('objeto');//ball
var sec = 0;
var sol=[];
var X,Y,ThetaDeg;
var t;


/*----CRONOMETRO-----*/

function tick(){
    sec+=0.2;
}
function add() {
    tick();
    
    h3.textContent = sec;
    pendulo(sec); //envia el tiempo a el pendulo
    
    timer();
}
function timer() {
    t = setTimeout(add, 200);//Wait 0.5 second for the add
}

start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);//evita la ejecucion de setTimeout
}

reset.onclick = function() {
    sec = 0;
    h3.textContent = "00";
    pendulo(sec);
}



/*--------PENDULO---------*/

function pendulo(s){
    sol= position(s);
    //X=200+Math.round(sol[0]);
    //Y=200+Math.round(sol[1]);
    ThetaDeg=-(sol[2]*(180/Math.PI));//cambio el signo, porque rotate es respecto al eje x

    /*-ball-*/
    //obj.style.left= X.toString()+'px';
    //obj.style.top= Y.toString()+'px';
    /*-bar-*/
    bar.style.transform = 'rotate('+ThetaDeg.toString()+'deg)';

}


/*--------FUNCION QUE OBTIENE LA POSICION------ */

var ThetaInit=(Math.PI/6), g=980, l=100; //valores por defecto

function GetValues(){
    l=document.getElementById('longitud').value;
    ThetaInit=document.getElementById('amplitud').value;
    bar.style.height=l.toString()+'px';//long de la barra
    obj.style.top=l.toString()+'px';
}


var w=Math.sqrt(g/l);//frecuencia angular
var Theta;//, rx, ry; angulo y vector posicion
var results=[];



function position(time) {
  Theta= ThetaInit*Math.cos(w*time);
  //rx=l*Math.sin(Theta);
  //ry=l*Math.cos(Theta);

  //results[0]=rx;
  //results[1]=ry;
  results[2]=Theta;

  return results;
}



