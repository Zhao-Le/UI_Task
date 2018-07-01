var a=[];
var b=[];
var c=[];
var d=[];
for(var i=0;i<5;i++)
    {
      b[i]=document.getElementById("city").children[i].innerHTML;
      a[i]=b[i].split(": ");
    }
function sort(){
    a.sort(function(num1,num2){
          return num1[1]-num2[1];
    });
    for(var i=0;i<5;i++){
    document.getElementById("city1").children[i].innerHTML= a[i][0]+a[i][1];
    }
}
