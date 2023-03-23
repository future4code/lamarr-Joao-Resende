const findFirstRecurringCharacter = (input) => {
   const charHashMap = {};
   for (const char of input) {
     if (charHashMap[char] === true) {
       return char;
     }
     charHashMap[char] = true;
   }
   return null;
 }; 

// O(n)