// Step 1: Calculate the average score of the class
function getAverage(scores) {
  let sum = 0;

  // Add all the scores together
  for (const score of scores) {
    sum += score;
  }

  // Divide the total sum by the number of scores to get the average
  return sum / scores.length;
}

// Step 2: Convert a numeric score to a letter grade
function getGrade(score) {
  if (score === 100) {
    return "A++";           // Perfect score
  } else if (score >= 90) {
    return "A";             // 90-99
  } else if (score >= 80) {
    return "B";             // 80-89
  } else if (score >= 70) {
    return "C";             // 70-79
  } else if (score >= 60) {
    return "D";             // 60-69
  } else {
    return "F";             // Below 60 is failing
  }
}

// Step 3: Check if the student has a passing grade
function hasPassingGrade(score) {
  // Use getGrade to get the letter grade and check if it's not "F"
  return getGrade(score) !== "F";
}

// Step 4: Generate a message for the student with results
function studentMsg(totalScores, studentScore) {
  // Calculate the class average
  const average = getAverage(totalScores);

  // Get the student's letter grade
  const grade = getGrade(studentScore);

  // Start building the message with average and grade info
  let message = "Class average: " + average.toFixed(1) + ". Your grade: " + grade + ". ";

  // Add pass/fail status
  if (grade !== "F") {
    message += "You passed the course.";
  } else {
    message += "You failed the course.";
  }

  // Return the full message
  return message;
}

/*
Example usage and output:
Calling studentMsg with a class scores array and a student score:

studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37);

Returns:

"Class average: 71.7. Your grade: F. You failed the course."
*/

// Test the function - output shown below
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// Output:
// Class average: 71.7. Your grade: F. You failed the course.
