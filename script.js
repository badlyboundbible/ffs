// script.js

let totalScore = 0;
let currentRoleMultiplier = 0;

function updateScoreDisplay() {
  document.getElementById("total-score").innerText = totalScore;
}

// Handle role selection
document.querySelectorAll(".role-icon").forEach(button => {
  button.addEventListener("click", () => {
    // Clear active state from other roles
    document.querySelectorAll(".role-icon").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Set the current role multiplier
    currentRoleMultiplier = parseInt(button.dataset.role);
    updateScoreDisplay();
  });
});

// Handle toggle icons (top row)
document.querySelectorAll(".toggle-icon").forEach(button => {
  button.addEventListener("click", () => {
    const points = parseInt(button.dataset.points);

    if (button.classList.contains("active")) {
      button.classList.remove("active");
      totalScore -= points;
    } else {
      button.classList.add("active");
      totalScore += points;
    }
    updateScoreDisplay();
  });
});

// Handle dropdowns (middle row)
document.querySelectorAll(".dropdown").forEach(dropdown => {
  dropdown.addEventListener("change", () => {
    const points = parseInt(dropdown.dataset.points || 0);
    const value = parseInt(dropdown.value);
    const isGoal = dropdown.id === "goal";

    if (isGoal && currentRoleMultiplier > 0) {
      totalScore += value * currentRoleMultiplier;
    } else {
      totalScore += points * value;
    }
    updateScoreDisplay();
  });
});
