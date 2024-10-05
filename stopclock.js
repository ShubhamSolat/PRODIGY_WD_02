const clock = document.querySelector(".clock");
const lapTimesContainer = document.getElementById("lapTimes");

let sec = 0, min = 0, hrs = 0, intervalId;

const startclock = () => {
    if (!intervalId) {  
        intervalId = setInterval(() => {
            if (sec < 59) {
                sec++;
            } else {
                sec = 0;
                if (min < 59) {
                    min++;
                } else {
                    min = 0;
                    hrs++;
                }
            }
            const second = String(sec).padStart(2, '0');
            const minute = String(min).padStart(2, '0');
            const hour = String(hrs).padStart(2, '0');
            clock.innerText = `${hour}:${minute}:${second}`;
        }, 1000);
    }
};

const stopclock = () => {
    clearInterval(intervalId);
    intervalId = null;
};

const resetclock = () => {
    stopclock();
    sec = 0;
    min = 0;
    hrs = 0;
    clock.innerText = "00:00:00";
    lapTimesContainer.innerHTML = ""; 
};

const lapTime = () => {
    const currentLapTime = clock.innerText;
    const li = document.createElement("li");
    li.textContent = currentLapTime;
    lapTimesContainer.appendChild(li);
};
