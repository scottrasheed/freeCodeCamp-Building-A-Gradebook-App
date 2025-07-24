// Calculates the average of an array of scores
function getAverage(scores) {
  let sum = 0;

  // Loop through each score and add it to the total sum
  for (const score of scores) {
    sum += score;
  }

  // Return the total sum divided by the number of scores (average)
  return sum / scores.length;
}

// Determines the letter grade based on the numeric score
function getGrade(score) {
  if (score === 100) {
    return "A++"; // Perfect score
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F"; // Below 60 is a failing grade
  }
}

// Checks if the score is a passing grade (not an "F")
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// Generates a message showing the class average, student grade, and pass/fail status
function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);     // Calculate class average
  const grade = getGrade(studentScore);        // Get student's letter grade
  let message = `Class average: ${average}. Your grade: ${grade}. `;

  // Add pass/fail message based on the grade
  if (grade !== "F") {
    message += "You passed the course.";
  } else {
    message += "You failed the course.";
  }

  return message; // Return the full message string
}

