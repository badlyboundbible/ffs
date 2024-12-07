// script.js

let totalScore = 0;
let currentRoleMultiplier = 0;

function updateScoreDisplay() {
  document.getElementById("total-score").innerText = totalScore;
}

// Role Selection
document.querySelectorAll(".role-icon").forEach(button => {
  button.addEventListener("click", () => {
    // Reset total score and clear selections when role changes
    totalScore = 0;
    currentRoleMultiplier = parseInt(button.dataset.role);
    document.querySelectorAll(".active").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    updateScoreDisplay();
  });
});

// Handle icon toggles
function handleIconToggle(rowSelector, pointsFn) {
  document.querySelectorAll(rowSelector).forEach(button => {
    button.addEventListener("click", () => {
      if (button.classList.contains("active")) {
        button.classList.remove("active");
        totalScore -= pointsFn();
      } else {
        button.classList.add("active");
        totalScore += pointsFn();
      }
      updateScoreDisplay();
    });
  });
}

// Event Handlers
handleIconToggle(".goal-icon", () => currentRoleMultiplier);
handleIconToggle(".assist-icon", () => 3);
handleIconToggle(".conceded-icon", () => -1);
handleIconToggle(".own-goal-icon", () => -2);
handleIconToggle(".penalty-icon", () => -3);
handleIconToggle(".toggle-icon", button => parseInt(button.dataset.points));

// Reset Button
document.getElementById("reset-button").addEventListener("click", () => {
  totalScore = 0;
  currentRoleMultiplier = 0;
  document.querySelectorAll(".active").forEach(button => button.classList.remove("active"));
  updateScoreDisplay();
});
