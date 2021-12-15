function clock(){


    var hours=document.getElementById("hrs");
    var minutes=document.getElementById("mins");
    var seconds=document.getElementById("secs");
    var aam=document.getElementById("am");

    var time=new Date();

    var a = time.getHours();

    if(a==0){
        a=12;
        
    }
    if(a>12){
        a=a-12;
        var d="PM";
        aam.innerHTML=d;
        document.getElementById('am').style.paddingTop="25px";
    }
    

    var b = time.getMinutes();
    var c = time.getSeconds();


    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;


    
}

setInterval(clock,1000);

function makediv(){
    var container=document.createElement('div');
    container.id="dynamic-block";
    container.className="grid-item1";
    document.getElementById('grid-container1').appendChild(container);

    var invalue1=document.getElementById('wakeupTimeSelector');
    var value1=invalue1.options[invalue1.selectedIndex].text;

    var invalue2=document.getElementById('wakeupTimeSelector2');
    var value2=invalue2.options[invalue2.selectedIndex].text;

    var invalue3=document.getElementById('wakeupTimeSelector3');
    var value3=invalue3.options[invalue3.selectedIndex].text;

    var tag1 = document.createElement("p");
    var text1 = document.createTextNode(" Wake Up Time : "+ value1);
    tag1.appendChild(text1);

    var tag2 = document.createElement("p");
    var text2 = document.createTextNode(" Lunch Time : "+ value2);
    tag2.appendChild(text2);

    var tag3 = document.createElement("p");
    var text3 = document.createTextNode(" Dinner Time : "+ value1);
    tag3.appendChild(text3);

    var temp=document.getElementById('dynamic-block');
    temp.appendChild(tag1);

    temp.appendChild(tag2);

    temp.appendChild(tag3);


   /* document.getElementById("dynamic-block").innerHTML=" Wake Up Time : "+ value1;
    document.getElementById("dynamic-block").innerHTML=" Lunch Time : "+ value2;
    document.getElementById("dynamic-block").innerHTML=" Nap Time : "+ value3;*/
}

function settime(){
    var a=document.getElementById('wakeupTimeSelector').value;
    var b=document.getElementById('wakeupTimeSelector2').value;
    var c=document.getElementById('wakeupTimeSelector3').value;

    var time=new Date();
    var hourr=time.getHours();
    
    if(a==hourr){
        
        document.getElementById("image-container").style.backgroundImage="url(./assets/wake2.png)";
        document.getElementById("text-container").innerHTML="Wake Up !!";
    }
    if(b==hourr){
        document.getElementById("image-container").style.backgroundImage="url(./assets/lunch.png)";
        document.getElementById("text-container").innerHTML="Let's have lunch !!";
    }
    if(c==hourr){
        document.getElementById("image-container").style.backgroundImage="url(./assets/night.png)";
        document.getElementById("text-container").innerHTML="GOOD NIGHT !!";
    }
    makediv();
}

