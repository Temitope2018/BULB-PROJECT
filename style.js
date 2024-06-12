const myText = document.getElementById("text");
const mySwitch = document.getElementById("button");
const myBulb = document.getElementById("bulb");


mySwitch.addEventListener("click",event=>{
    if(mySwitch.innerHTML==="ON"){
       myText.innerHTML ="THE BULB IS ON";
       myText.style.color = "red";
       mySwitch.innerHTML ="OFF";
       mySwitch.style.color = "white"
       mySwitch.style.backgroundColor = "blue";
       myBulb.src = "on-bulb.jpg";
       
       

    }else{
        myBulb.src = "off-bulb.jpg";
        myText.innerHTML ="THE BULB IS OFF";
        myText.style.color ="black";
        myText.style.opacity = .5;
        mySwitch.innerHTML = "ON";
        mySwitch.style.color = "red";
        mySwitch.style.backgroundColor ="white";
    }
})
