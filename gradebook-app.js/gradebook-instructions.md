Gradebook Project Notes (with Code & Coding Terms)
Step 1: Calculate the Average Score
Function: getAverage(scores)

Goal: Calculate the arithmetic mean of the input array.

How: Use a for loop (iteration) to add each score to a sum variable.

Then: Divide the total sum by the number of scores (scores.length) to get the average.

js
Copy
Edit
function getAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score;           // accumulate scores
  }
  return sum / scores.length; // compute average
}
Step 2: Convert Numeric Scores to Letter Grades
Function: getGrade(score)

Goal: Map a numeric score to a letter grade.

How: Use conditional statements (if / else if / else) with comparison operators (>=, ===) to check which range the score falls into.

Returns a string grade based on ranges.

js
Copy
Edit
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
Step 3: Determine If Student Passed
Function: hasPassingGrade(score)

Goal: Return a boolean indicating if the student passed.

How: Calls getGrade(score) and compares the result to "F".

Returns true if not "F", else false.

js
Copy
Edit
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}
Step 4: Generate a Message for the Student
Function: studentMsg(totalScores, studentScore)

Goal: Produce a formatted string that includes:

Class average (from getAverage)

Student’s letter grade (from getGrade)

Pass/fail message (based on hasPassingGrade)

Uses function composition to reuse existing logic.

Uses .toFixed(1) to format the average to 1 decimal place.

Builds message with string concatenation and control flow.

js
Copy
Edit
function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  let message = "Class average: " + average.toFixed(1) + ". Your grade: " + grade + ". ";

  if (grade !== "F") {
    message += "You passed the course.";
  } else {
    message += "You failed the course.";
  }
  return message;
}
