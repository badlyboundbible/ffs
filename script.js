let totalScore = 0;
let roleMultiplier = 0;

// Update the displayed score
function updateScoreDisplay() {
  document.getElementById("total-score").textContent = totalScore;
}

// Reset all buttons and score
function resetAllButtons() {
  document.querySelectorAll("button").forEach(button => button.classList.remove("active"));
}

// Full reset: score, role, and buttons
function resetAll() {
  totalScore = 0;
  roleMultiplier = 0;
  resetAllButtons();
  updateScoreDisplay();
}

// Role selection logic
document.querySelectorAll(".role-button").forEach(button => {
  button.addEventListener("click", () => {
    // Reset everything when a role is changed
    resetAll();

    // Activate the selected role
    document.querySelectorAll(".role-button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Set role multiplier
    roleMultiplier = parseInt(button.dataset.role);
  });
});

// Event button logic (e.g., Penalty Miss, Own Goal, Conceded Goal, Assists)
document.querySelectorAll(".event-button").forEach(button => {
  button.addEventListener("click", () => {
    const points = parseInt(button.dataset.points);

    if (button.classList.contains("active")) {
      // Deselect the button and subtract points
      button.classList.remove("active");
      totalScore -= points;
    } else {
      // Select the button and add points
      button.classList.add("active");
      totalScore += points;
    }

    updateScoreDisplay();
  });
});

// Goal button logic (depends on the selected role multiplier)
document.querySelectorAll(".goal-button").forEach(button => {
  button.addEventListener("click", () => {
    if (roleMultiplier === 0) {
      alert("Please select a role first!");
      return;
    }

    const points = roleMultiplier;

    if (button.classList.contains("active")) {
      // Deselect the button and subtract points
      button.classList.remove("active");
      totalScore -= points;
    } else {
      // Select the button and add points
      button.classList.add("active");
      totalScore += points;
    }

    updateScoreDisplay();
  });
});

// Reset button logic
document.getElementById("reset-button").addEventListener("click", resetAll);
