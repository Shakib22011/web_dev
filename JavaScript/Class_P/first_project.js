let count=0;
let count1=0;
function increase(){
    count++;
     updateCounter();
     if( count>1 && count%10 == 0){
        count1++;
        updateCounter();
        alert("Counter reached "+count);
        
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
    count1=0;
    updateCounter();
}

function updateCounter(){
    document.getElementById("counter").textContent=count;
    document.getElementById("button1").textContent=count1;
}
