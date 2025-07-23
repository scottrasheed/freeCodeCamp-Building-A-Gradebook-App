// Step 1: Calculate the average score of the class
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

// Step 2: Convert a numeric score into a letter grade
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Step 3: Check if the student has a passing grade
// This function returns true if the grade is NOT an "F", false otherwise
function hasPassingGrade(score) {
  // Get the letter grade for the given score
  const grade = getGrade(score);

  // If the grade is "F", return false (not passing)
  if (grade === "F") {
    return false;
  }

  // Otherwise, it’s a passing grade
  return true;
}

// Test hasPassingGrade with some example scores
console.log(hasPassingGrade(100)); 
// Expected output: true (A++ is passing)

console.log(hasPassingGrade(53));  
// Expected output: false (F)

console.log(hasPassingGrade(87));  
// Expected output: true (B)
