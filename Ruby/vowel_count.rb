# INSTRUCTION

# Return the number (count) of vowels in the given string.
# We will consider a, e, i, o, and u as vowels for this Kata.
# The input string will only consist of lower case letters and/or spaces.

# SOLUTION

def getCount(inputStr)
    vowels = ["a", "e", "i", "o", "u"]
    vowel_count = 0
    
    inputStr.chars.each do |char|
      if vowels.include? char 
        vowel_count += 1 
      end 
    end 
    vowel_count
end