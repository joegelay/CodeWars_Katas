// INSTRUCTION

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

// SOLUTION

function iqTest(numbers){
  
    const numbersArray = numbers.split(" ")
    
    const evenNumbers = []
    const oddNumbers = []
  
    for (let i = 0; i < numbersArray.length; i++) {
      numbersArray[i] % 2 != 0 ? oddNumbers.push(i + 1) : evenNumbers.push(i + 1)
      
      if (evenNumbers.length && oddNumbers.length) {
        if (evenNumbers.length > 1){
          return oddNumbers[0]
        }
        if (oddNumbers.length > 1){
          return evenNumbers[0]
        }
      }
    }
}
