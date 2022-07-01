function clock1(){
    var hours = document.getElementById("hrs");
   // console.log(hours);
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am_pm = document.getElementById("am");
     am_pm=(hours>=12)?('pm'):('am');
    var time=new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c ;
}
setInterval(clock1, 1000);
function set(){
   let setTime = document.getElementsByClassName("fourth-container")[0];
   setTime.innerHTML="Alarm set";
   var i =document.getElementById("wakeup").value;
   var hours = new Date().getHours();
   var j = document.getElementById("lunchtime").value;
   var k = document.getElementById("naptime").value;
   var l = document.getElementById("nighttime").value;
   if(i == hours){
    document.getElementById("changeImage").style.backgroundImage=url("morning.svg");
    document.getElementById("changeText").innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
    document.getElementById("changeMsg").innerHTML="GOOD MORNING!!";
   }
   if(j == hours){
    document.getElementById("changeImage").style.backgroundImage=url("lunch1.svg");
    document.getElementById("changeText").innerHTML="LETS HAVE SOME LUNCH !!";
    document.getElementById("changeMsg").innerHTML="GOOD AFTERNOON!!";
   }
   if(k == hours){
    document.getElementById("changeImage").style.backgroundImage=url("evg.png");
    document.getElementById("changeText").innerHTML="STOP YAWNING,GET SOME TEA ITS JUST EVENING!!!";
    document.getElementById("changeMsg").innerHTML="GOOD EVENING!!";
   }
   if(l == hours){
    document.getElementById("changeImage").style.backgroundImage=url("night1.svg");
    document.getElementById("changeText").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP!!!";
    document.getElementById("changeMsg").innerHTML="GOOD NIGHT!!";
   }
   var box=document.createElement("p");
   document.getElementsByClassName("time-table")[0].appendChild(box);
   var time1 = document.getElementsByClassName("font");
   var inputOne = document.getElementById("wakeup");
   var inputSec = document.getElementById("lunchtime");
   var inputThird = document.getElementById("naptime");
   var inputFour = document.getElementById("nighttime");
   

   time1[0].innerText="Wakeup Time:" + "" + inputOne.options[inputOne.selectedIndex].text;
   time1[1].innerText="Lunch Time:" + "" + inputSec.options[inputSec.selectedIndex].text;
   time1[2].innerText="Nap Time:" + "" + inputThird.options[inputThird.selectedIndex].text;
   time1[3].innerText="Sleep Time:" + "" + inputFour.options[inputFour.selectedIndex].text;


}


