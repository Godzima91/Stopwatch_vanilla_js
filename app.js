let button_section = document.getElementById("buttons");
let start = document.getElementById('start_btn');
let stop_int = document.getElementById('stop_int_btn');
let stop = document.getElementById('stop_btn');
let interval = document.getElementById('interval_btn');
let cont_res = document.getElementById('cont_reset_btn');
let cont = document.getElementById('continue_btn');
let reset = document.getElementById('reset_btn');
let num_item = document.getElementById('interval')
var clock = document.getElementById('clock_dial');


    start.addEventListener("click", function tick() {
        let isPaused = false;

        let sec = 0;
        let min = 0;
        let hour = 0;
    
        let addSec = 0;
        let addMin = 0;
        let addHour = 0;
        start.style.visibility = "hidden"
        clock.style.opacity = "1"
        stop_int_btn.style.visibility = "visible";


    let s = setInterval (function c() {  
        
        if(!isPaused) {
            sec++;
        
            if(sec / 60 === 1){
                sec = 0;
                min++;
            }
            if(min / 60 === 1){
                min = 0;
                hour++;
            }
            if(sec < 10){
                    addSec = "0" + sec.toString();
                }
                else{
                    addSec = sec;
                }
            
            if(min < 10){
                    addMin = "0" + min.toString();
                }
                else {
                    addMin = min;
                }
            
            if(hour < 10){
                    addHour = "0" + hour.toString();
                }
                else {
                    addHour = hour;
                }

            clock.innerHTML = addHour + ":" + addMin + ":" + addSec;
        } 
                   
// stop button
        stop.addEventListener("click", function stop() {
            // clearInterval(s);
        stop_int_btn.style.visibility = "hidden";
        cont_reset_btn.style.visibility = "visible"
        clock.style.opacity = "0.8";
            isPaused = true

        })
// continue button
        cont.addEventListener("click", function() {
            cont_reset_btn.style.visibility = "hidden";
            stop_int_btn.style.visibility = "visible";
                isPaused = false
        })
// reset button
        reset.addEventListener("click", function reset() {
            cont_reset_btn.style.visibility = "hidden";
            
            start.style.visibility = "visible";
            clock.innerHTML = "00:00:00"

            clock.style.opacity = "0.2";
            // num_item.remove()
            num_item.innerText = ''
        })  
    }, 1000)
    }  
)

interval.addEventListener("click", function interval() {

    const NUM = clock.lastChild.data
    const ITEM = `<li class="numeric_value">${NUM}</li>`
    const position = "beforeend";

    num_item.insertAdjacentHTML(position, ITEM);
})





