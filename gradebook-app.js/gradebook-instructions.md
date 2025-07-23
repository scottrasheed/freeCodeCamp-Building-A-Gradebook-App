# Gradebook Project

This project is a simple gradebook program that helps calculate the average class score, convert numeric scores into letter grades, check if a student passed, and generate a personalized message for the student.

---

## Step 1: Calculate the Average Score

**Function:** `getAverage(scores)`

Calculates the arithmetic mean of an array of scores.

- Uses a loop to sum all scores.
- Divides the total sum by the number of scores.

```js
function getAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score; // add each score to sum
  }
  return sum / scores.length; // calculate average
}
Step 2: Convert Numeric Scores to Letter Grades
Function: getGrade(score)

Converts a numeric score to a letter grade using conditional logic:

100 → "A++"

90–99 → "A"

80–89 → "B"

70–79 → "C"

60–69 → "D"

<60 → "F"

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

Returns true if the student's grade is passing (not "F"), otherwise false.

js
Copy
Edit
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}
Step 4: Generate a Message for the Student
Function: studentMsg(totalScores, studentScore)

Calculates class average.

Gets student's letter grade.

Checks if the student passed.

Builds and returns a message string.

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
Example Usage and Output
js
Copy
Edit
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
Output:

vbnet
Copy
Edit
Class average: 71.7. Your grade: F. You failed the course.
