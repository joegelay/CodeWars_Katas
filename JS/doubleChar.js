// INSTRUCTION

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "

// SOLUTION

function doubleChar(str) {
    let doubledString = ""
    for (i = 0; i < str.length; i++) {
      doubledString += str.charAt(i) + str.charAt(i)
    }
    return doubledString
}
