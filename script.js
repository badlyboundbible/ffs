// script.js

let totalScore = 0;
let roleMultiplier = 0;

// Update score display
function updateScoreDisplay() {
  document.getElementById("total-score").textContent = totalScore;
}

// Reset all buttons and score
function resetAll() {
  totalScore = 0;
  roleMultiplier = 0;
  document.querySelectorAll("button").forEach(button => button.classList.remove("active"));
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

// Event button logic
document.querySelectorAll(".event-button").forEach(button => {
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

// Goal button logic (depends on role multiplier)
document.querySelectorAll(".goal-button").forEach(button => {
  button.addEventListener("click", () => {
    if (roleMultiplier === 0) {
      alert("Please select a role first!");
      return;
    }

    const points = roleMultiplier;

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

// Reset button logic
document.getElementById("reset-button").addEventListener("click", resetAll);
