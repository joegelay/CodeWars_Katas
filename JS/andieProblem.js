// INSTRUCTION

// Implement a function that takes an array and some other arguments and then removes the other arguments from that array

// SOLUTION

function andieSolution(array,stuffToRemoveFromArray) {
    
    const argsArray = [...arguments]
    const originalArray = argsArray.shift()
   
    const result = originalArray.filter(number => {
        return !argsArray.includes(number)
    }) 

   return result 
}