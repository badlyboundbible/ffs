// script.js

let totalScore = 0;
let currentRoleMultiplier = 0;

function updateScoreDisplay() {
  document.getElementById("total-score").innerText = totalScore;
}

document.querySelectorAll(".icon").forEach(button => {
  button.addEventListener("click", () => {
    const points = parseInt(button.dataset.points || 0);
    const role = button.dataset.role;

    // Role icons set multiplier
    if (role) {
      currentRoleMultiplier = parseInt(role);
    } else {
      totalScore += points;
    }
    updateScoreDisplay();
  });
});

document.querySelectorAll(".dropdown").forEach(dropdown => {
  dropdown.addEventListener("change", () => {
    const points = parseInt(dropdown.dataset.points || 0);
    const value = parseInt(dropdown.value);
    const isGoal = dropdown.id === "goal";

    if (isGoal) {
      totalScore += value * currentRoleMultiplier;
    } else {
      totalScore += points * value;
    }
    updateScoreDisplay();
  });
});
