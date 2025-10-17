const timeElement = document.getElementById("time-display");
console.log(timeElement);

function displayTime() {
  setInterval(() => {
    const currentTime = Date.now();
    timeElement.textContent = `${currentTime}s`;
  }, 1000);
}

displayTime();
