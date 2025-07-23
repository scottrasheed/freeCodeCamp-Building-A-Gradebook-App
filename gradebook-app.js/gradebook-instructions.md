# Gradebook Project — Complete Personal Notes

---

## Step 1: Calculate the Average Score  
**Function:** `getAverage(scores)`  

- Calculates the arithmetic mean (average) of an array of numeric scores.  
- Uses a `for...of` loop to iterate over each score and add it to a running total `sum`.  
- Divides the total `sum` by the length of the scores array to get the average.

```js
function getAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score;           // accumulate each score into sum
  }
  return sum / scores.length; // compute average
}
Step 2: Convert Numeric Scores to Letter Grades
Function: getGrade(score)

Converts a numeric score into a letter grade string.

Uses conditional statements (if, else if, else) to check the score ranges using comparison operators (>=, ===).

Returns the letter grade based on the defined ranges:

Score	Grade
100	A++
90 to 99	A
80 to 89	B
70 to 79	C
60 to 69	D
Below 60	F

js
Copy
Edit
function getGrade(score) {
  if (score === 100) {
    return "A++";           // perfect score
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";             // failing grade
  }
}
Step 3: Determine If Student Passed
Function: hasPassingGrade(score)

Returns a boolean true if the student’s grade is passing (anything but "F"), otherwise false.

Calls the getGrade function internally and compares the grade string.

js
Copy
Edit
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}
Step 4: Generate a Message for the Student
Function: studentMsg(totalScores, studentScore)

Calculates the class average by calling getAverage(totalScores).

Gets the student's letter grade by calling getGrade(studentScore).

Builds a formatted message string showing the class average (rounded to 1 decimal with .toFixed(1)), the student’s grade, and pass/fail status.

Uses string concatenation and if/else control flow to finalize the message.

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
