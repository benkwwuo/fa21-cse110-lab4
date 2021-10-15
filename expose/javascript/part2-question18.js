displayTime();
function displayTime() {
    let d = new Date();
    setInterval(function(){ console.log(d.toLocaleTimeString()); }, 1000);
}

