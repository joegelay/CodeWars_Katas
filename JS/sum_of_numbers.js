// INSTRUCTION

// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// SOLUTION

function getSum(a,b) {

    if (a === b) {
        return a
    }

    numbers = []
        
    if (a < b) {
        for (let i = a; i <= b; i++) {
            numbers.push(i)
        }
    } else {
        for (let i = b; i <= a; i++) {
        numbers.push(i)
        }
    }

    return numbers.reduce((a, b) => a + b, 0)
}