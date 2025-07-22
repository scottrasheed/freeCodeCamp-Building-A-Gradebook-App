// Step 1: Calculate the average score of the class
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

// Step 2: Convert a numeric score into a letter grade
// This function takes a number and returns the corresponding letter grade
function getGrade(score) {
  // Check if the score is exactly 100
  if (score === 100) {
    return "A++";
  }
  // Check if the score is between 90 and 99
  else if (score >= 90 && score <= 99) {
    return "A";
  }
  // Check if the score is between 80 and 89
  else if (score >= 80 && score <= 89) {
    return "B";
  }
  // Check if the score is between 70 and 79
  else if (score >= 70 && score <= 79) {
    return "C";
  }
  // Check if the score is between 60 and 69
  else if (score >= 60 && score <= 69) {
    return "D";
  }
  // If none of the above, it must be 0–59
  else {
    return "F";
  }
}

// Test getGrade with some example scores
console.log(getGrade(96)); 
// Expected output: "A"

console.log(getGrade(82)); 
// Expected output: "B"

console.log(getGrade(56)); 
// Expected output: "F"
