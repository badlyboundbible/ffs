// script.js

let totalScore = 0;
let roleMultiplier = 0;

// Update score display
function updateScoreDisplay() {
  document.getElementById("total-score").textContent = totalScore;
}

// Role selection logic
document.querySelectorAll(".role-button").forEach(button => {
  button.addEventListener("click", () => {
    // Clear previous role and reset score
    document.querySelectorAll(".role-button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Set role multiplier
    roleMultiplier = parseInt(button.dataset.role);
    totalScore = 0; // Reset score on role change
    updateScoreDisplay();
  });
});

// Event button logic
document.querySelectorAll(".event-button").forEach(button => {
  button.addEventListener("click", () => {
    const points = parseInt(button.dataset.points);

    if (button.classList.contains("active")) {
      // Deactivate button and remove points
      button.classList.remove("active");
      totalScore -= points;
    } else {
      // Activate button and add points
      button.classList.add("active");
      totalScore += points;
    }

    updateScoreDisplay();
  });
});

// Goal button logic (uses role multiplier)
document.querySelectorAll(".goal-button").forEach(button => {
  button.addEventListener("click", () => {
    if (roleMultiplier === 0) {
      alert("Please select a role first!");
      return;
    }

    const points = roleMultiplier;

    if (button.classList.contains("active")) {
      // Deactivate button and remove points
      button.classList.remove("active");
      totalScore -= points;
    } else {
      // Activate button and add points
      button.classList.add("active");
      totalScore += points;
    }

    updateScoreDisplay();
  });
});

// Reset button logic
document.getElementById("reset-button").addEventListener("click", () => {
  totalScore = 0;
  roleMultiplier = 0;

  // Clear all active buttons
  document.querySelectorAll("button").forEach(button => button.classList.remove("active"));

  updateScoreDisplay();
});
