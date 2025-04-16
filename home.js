var noon = 12;

function showCurrentTime() {
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if (hours >= noon) {
        meridian = "PM";
        if (hours > 12) {
            hours -= 12; 
        }
    } else if (hours === 0) {
        hours = 12; 
        meridian = "AM";
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

    clock.innerText = clockTime;

    clock.style.fontSize = "48px";
    clock.style.color = "White";
    clock.style.padding = "40px";
}


setInterval(showCurrentTime, 1000);


showCurrentTime();




var menuLink = document.getElementById('menu-link');

menuLink.addEventListener('click',function(event) {
    alert('Coming soon!');  
});
