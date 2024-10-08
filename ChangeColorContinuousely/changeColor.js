let currentIndex = 0;
let intervalId;

const buttonStart = document.getElementById('start');
const buttonStop = document.getElementById('stop');

      
        // Start changing colors on button click
        buttonStart.addEventListener('click', () => {
            if (!intervalId) {
                intervalId = setInterval(changeBackgroundColor, 1000); // Change color every 1 second
            }
        });

        // Stop changing colors on button click
        buttonStop.addEventListener('click', () => {
            clearInterval(intervalId);
            intervalId = null; // Reset intervalId to allow restarting
        });

        let colors = ["light", "green", "coral", "yellow", "pink"];
         
        function changeBackgroundColor() {
         const colorArr = document.body.style.backgroundColor = colors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length ; // Loop back to the start
            // prompt('enter the number',colorArr);
        }