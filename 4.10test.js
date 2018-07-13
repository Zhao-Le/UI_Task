function plus(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var result=document.getElementById("first");
    var num3=parseInt(num1);
    var num4=parseInt(num2);
    first.value=num3+num4;
    document.getElementById("first");
}
function minus(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var result=document.getElementById("first");
    var num3=parseInt(num1);
    var num4=parseInt(num2);
    first.value=num3-num4;
    document.getElementById("first");
}
function times(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var result=document.getElementById("first");
    var num3=parseInt(num1);
    var num4=parseInt(num2);
    first.value=num3*num4;
    document.getElementById("first");
}
function division(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var result=document.getElementById("first");
    var num3=parseInt(num1);
    if(num2==0)
    {
        alert("Error!")
        
    }
    else
    var num4=parseInt(num2);
    first.value=num3/num4;
    document.getElementById("first");
}

