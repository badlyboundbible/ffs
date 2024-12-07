// script.js

let totalScore = 0;
let currentRoleMultiplier = 0;

function updateScoreDisplay() {
  document.getElementById("total-score").innerText = totalScore;
}

// Role Selection
document.querySelectorAll(".role-icon").forEach(button => {
  button.addEventListener("click", () => {
    // Clear active state
    document.querySelectorAll(".role-icon").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentRoleMultiplier = parseInt(button.dataset.role);
    updateScoreDisplay();
  });
});

// Handle icon toggles for a given row
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

// Goal Icons: Use the selected role multiplier
handleIconToggle(".goal-icon", () => currentRoleMultiplier);

// Assist Icons: Each is worth 3 points
handleIconToggle(".assist-icon", () => 3);

// Conceded Goal Icons: Each is worth -1 point
handleIconToggle(".conceded-icon", () => -1);

// Own Goal Icons: Each is worth -2 points
handleIconToggle(".own-goal-icon", () => -2);

// Penalty Miss Icons: Each is worth -3 points
handleIconToggle(".penalty-icon", () => -3);

// First Half and Second Half Toggles
handleIconToggle(".toggle-icon", button => parseInt(button.dataset.points));
