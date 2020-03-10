# INSTRUCTION

# The main idea is to count all the occurring characters(UTF-8) in string. 
# If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

# What if the string is empty ? Then the result should be empty object literal { }

# SOLUTION

def count_chars(s)
    result = Hash.new
    result.default = 0
    
    char_array = s.chars
    char_array.each do |char|
      result[char] += 1
    end 
    result 
end

