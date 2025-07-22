// Step 1: Calculate the average score of the class
// This function takes an array of scores, sums them up, and divides by the number of scores
function getAverage(scores) {
  // Initialize a variable to store the sum of all scores
  let total = 0;

  // Loop through each score in the array
  for (let i = 0; i < scores.length; i++) {
    // Add the current score to the total
    total += scores[i];
  }

  // After the loop, calculate the average
  let average = total / scores.length;

  // Return the average score
  return average;
}

// Test the function with two sample arrays of scores
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// Expected output: 71.7

console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
// Expected output: 85.4 
