// INSTRUCTION

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// SOLUTION

function isSortedAndHow(array) {
    const ascArray = [...array].sort((a, b) => a-b);
    const descArray = [...ascArray].reverse(); 
    
    const yesAscending = array.join() == ascArray.join();
    const yesDescending = array.join() == descArray.join();
    
    return yesAscending ? "yes, ascending" : yesDescending ? "yes, descending" : "no"; 
}