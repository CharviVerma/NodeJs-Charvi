// Define an array
const numbers = [1, 2, 3, 4, 5];

// Function to calculate sum of array elements
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Call the function and print the sum
console.log("Sum of the array:", calculateSum(numbers));
