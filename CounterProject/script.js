var counter  = document.getElementById("h1_id");
var followers = document.getElementById("p_id");

// counter.innerHTML = 1002;

var count = 1;
setInterval(() => {
    
    if(count <= 1000){
        counter.innerText = count;
        count++;
    }
}, 1);


setTimeout(() => {
    followers.innerText = "Followers On Instagram";
}, 6500);