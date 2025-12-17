let count=0;
function increase(){
    count++;
    updateCounter();
     if( count>1 && count%10 == 0){
        var count1=0;
        count1++;
        document.getElementById("button1").innerHTML=count1;
        alert("Counter reached 10");
    }
}

function decrease(){
    count--;
    updateCounter();
    if(count<0){
        reset();
        alert("Counter cannot be negative");
    }
   
}

function reset(){
    count=0;
    updateCounter();
}

function updateCounter(){
    document.getElementById("counter").textContent=count;
    document.getElementById("button1").textContent=count1;
}
