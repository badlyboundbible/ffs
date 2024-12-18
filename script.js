// Initialize variables
let totalScore = 0;
let roleMultiplier = 0;
let selectedPositionBonus = 0;

// Get DOM elements
const totalScoreDisplay = document.getElementById('total-score');
const realWorldValueInput = document.getElementById('real-world-value');
const ffsValueDisplay = document.getElementById('ffs-value');
const positionButtons = document.querySelectorAll('.position-button');
const calculateButton = document.getElementById('calculate-button');

// Update the displayed score
function updateScoreDisplay() {
  totalScoreDisplay.textContent = totalScore;
}

// Reset all buttons and score
function resetAllButtons() {
  document.querySelectorAll('button').forEach(button => button.classList.remove('active'));
}

// Full reset: score, role, buttons, and value calculator
function resetAll() {
  // Reset points calculator
  totalScore = 0;
  roleMultiplier = 0;
  resetAllButtons();
  updateScoreDisplay();
  
  // Reset value calculator
  realWorldValueInput.value = '';
  positionButtons.forEach(btn => btn.classList.remove('active'));
  selectedPositionBonus = 0;
  ffsValueDisplay.textContent = '£0.0';
}

// Role selection logic
document.querySelectorAll('.role-button').forEach(button => {
  button.addEventListener('click', () => {
    // Reset everything when a role is changed
    document.querySelectorAll('.role-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Set role multiplier
    roleMultiplier = parseInt(button.dataset.role);
  });
});

// Event button logic (e.g., Penalty Miss, Own Goal, Conceded Goal, Assists)
document.querySelectorAll('.event-button').forEach(button => {
  button.addEventListener('click', () => {
    const points = parseInt(button.dataset.points);

    if (button.classList.contains('active')) {
      // Deselect the button and subtract points
      button.classList.remove('active');
      totalScore -= points;
    } else {
      // Select the button and add points
      button.classList.add('active');
      totalScore += points;
    }

    updateScoreDisplay();
  });
});

// Goal button logic (depends on the selected role multiplier)
document.querySelectorAll('.goal-button').forEach(button => {
  button.addEventListener('click', () => {
    if (roleMultiplier === 0) {
      alert('Please select a role first!');
      return;
    }

    const points = roleMultiplier;

    if (button.classList.contains('active')) {
      // Deselect the button and subtract points
      button.classList.remove('active');
      totalScore -= points;
    } else {
      // Select the button and add points
      button.classList.add('active');
      totalScore += points;
    }

    updateScoreDisplay();
  });
});

// Position button event listeners for value calculator
positionButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all position buttons
    positionButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    // Update selected position bonus
    selectedPositionBonus = parseFloat(button.dataset.bonus);
  });
});

// Calculate button event listener
calculateButton.addEventListener('click', () => {
  const realWorldValue = parseFloat(realWorldValueInput.value) || 0;
  
  if (selectedPositionBonus === 0) {
    alert('Please select a position first!');
    return;
  }
  
  if (realWorldValue === 0) {
    alert('Please enter a real world value!');
    return;
  }
  
  const baseValue = realWorldValue * 0.69;
  const ffsValue = baseValue + selectedPositionBonus;
  ffsValueDisplay.textContent = `£${ffsValue.toFixed(1)}`;
});

// Reset button event listener
document.getElementById('reset-button').addEventListener('click', resetAll);
