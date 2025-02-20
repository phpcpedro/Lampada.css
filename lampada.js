const lamp = document.getElementById('lamp');
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');

function isLampBroken(){
    return lamp.scr.indexOf('quebrada')> -1
}
function lampOn(){
    if(!isLampBroken()){
        lamp.src= './img/ligada.jpg';
    }
}
function lampOff(){
if(!isLampBroken){
    lamp.src ='./img/desligada.jpg';

}
    
}