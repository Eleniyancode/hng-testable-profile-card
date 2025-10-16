const timeElement = document.getElementById("time-display");
console.log(timeElement);

const currentTime = Date.now();
console.log(currentTime);

timeElement.textContent = `${currentTime}s`;
