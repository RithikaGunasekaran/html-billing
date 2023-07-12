var n1,n2,n3,n4,n5,r1,r2,r3,r4,total;
function display(){
    n1=document.getElementById("i1").value
    n2=document.getElementById("i2").value
    n3=document.getElementById("i3").value
    n4=document.getElementById("i4").value
    r1=n1*20;
    r2=n2*15;
    r3=n3*30;
    r4=n4*45;
    total=r1+r2+r3+r4;
    document.getElementById("final").innerText=total;
}