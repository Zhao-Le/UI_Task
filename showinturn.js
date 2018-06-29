var oBox = document.getElementById("box");
var oUl = document.getElementById("inner-box");
var oLeft = document.getElementById("left");
var oRight = document.getElementById("right");
var cur = 0;
var timer = null;
var target = 0;
var timer1 = null;
var i = 0;
timer = setInterval(autoPlay, 2000);
function autoPlay() {
    if (target <= -400) {
        cur = 0;
        target = -100;
    } else {
        target -= 100;
    }
    sport(target);
    btnBottom();
}
oRight.onclick = function(argument) {
    if (target <= -400) {
        cur = 0;
        target = -100;
    } else {
        target -= 100;
    }
     sport(target); 
    btnBottom();
} 
oLeft.onclick = function(argument) {
    if (target > -100) {
       cur -= 400;
       target = -300;
    } else{
        target += 100;
    }
    sport(target);
    btnBottom();
} 
btnBottom(i)
function  btnBottom() {
    i = -(target/100);
    i == 4 ? i = 0 : i; 
    var oOl = document.getElementById("ol");
    var oLi = oOl.getElementsByTagName("li");
    for( j=0 ; j<oLi.length ; j++){
      oLi[j].style.background = '';
    }
    oLi[i].style.background = '#fff';
}
var oOl = document.getElementById("ol");
var oLi = oOl.getElementsByTagName("li");
for( j=0 ; j<oLi.length ; j++){
    oLi[j].index = j
    oLi[j].onclick = function() {
           target = -(this.index*100);
           sport(target);
           btnBottom()
    }
}
function sport(tar) {
    clearInterval(timer1);
    timer1 = setInterval(autoPlay, 30); 
    function autoPlay() { 
        if (cur == tar) {
            clearInterval(timer1)
        } else {
            speed = (tar - cur) / 7; 
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //取整
            cur = cur + speed; 
            oUl.style.left = cur + "%";
        }
    }
}
