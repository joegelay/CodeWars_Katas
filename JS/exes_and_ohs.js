// INSTRUCTION

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// SOLUTION

function XO(str) {
    
    let x = 0;
    let o = 0;
    
    const splitString = str.split('');
    
    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i].toLowerCase() === "x") {
          x += 1 
        } else if (splitString[i].toLowerCase() === "o") {
          o += 1 
        };
    };
       
   return (x === o ? true : false);
}
