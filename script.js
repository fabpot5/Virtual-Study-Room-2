// Pomodoro Timer
let timer;
let timeLeft = 1500;
document.getElementById("start").addEventListener("click", function() {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                let minutes = Math.floor(timeLeft / 60);
                let seconds = timeLeft % 60;
                document.getElementById("time").innerText = 
                    `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }
});
document.getElementById("reset").addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
    timeLeft = 1500;
    document.getElementById("time").innerText = "25:00";
});

// Task Manager
document.getElementById("addTask").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    if (taskInput.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskInput.value;
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    }
});

// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
