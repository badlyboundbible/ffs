// script.js

let totalScore = 0;
let currentRoleMultiplier = 0;

function updateScoreDisplay() {
  document.getElementById("total-score").innerText = totalScore;
}

// Role Selection
document.querySelectorAll(".role-icon").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".role-icon").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentRoleMultiplier = parseInt(button.dataset.role);
    updateScoreDisplay();
  });
});

// Handle toggle icons
function handleToggle(button, points) {
  if (button.classList.contains("active")) {
    button.classList.remove("active");
    totalScore -= points;
  } else {
    button.classList.add("active");
    totalScore += points;
  }
  updateScoreDisplay();
}

// Handle goal row
document.querySelectorAll(".goal-icon").forEach(button => {
  button.addEventListener("click", () => {
    const points = currentRoleMultiplier;
    handleToggle(button, points);
  });
});

// Handle assist row
document.querySelectorAll(".assist-icon").forEach(button => {
  button.addEventListener("click", () => {
    const points = parseInt(button.dataset.points);
    handleToggle(button, points);
  });
});

// Handle conceded goal row
document.querySelectorAll(".conceded-icon").forEach(button => {
  button.addEventListener("click", () => {
    const points = parseInt(button.dataset.points);
    handleToggle(button, points);
  });
});

// Handle own goal row
document.querySelectorAll(".own-goal-icon").forEach(button => {
  button.addEventListener("click", () => {
    const points = parseInt(button.dataset.points);
    handleToggle(button, points);
  });
});

// Handle penalty miss row
document.querySelectorAll(".penalty-icon").forEach(button => {
  button.addEventListener("click", () => {
    const points = parseInt(button.dataset.points);
    handleToggle(button, points);
  });
});

// Handle First Half and Second Half
document.querySelectorAll(".toggle-icon").forEach(button => {
  button.addEventListener("click", () => {
    const points = parseInt(button.dataset.points);
    handleToggle(button, points);
  });
});
