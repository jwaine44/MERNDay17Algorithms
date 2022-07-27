/* 
Given by Riot games.
*/
// b: 70
// a:184
// c:42
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
 function rehash(s) {
    dict = {}
    var count = 0
  // loops through the dict
    while(count != s.length){
      // if the character is not a number
        if (isNaN(s[count])){
          // if the dictionary doesn't already have this character
            if (! dict.hasOwnProperty(s[count])){
              // store the key for the dictionary
                var key = s[count];
                count++; // increase count
                var num = ''; // variable for the number
              // while the next chars are numbers
                while(! isNaN(s[count])){
                  // store them concurrently in the num variable
                    num += s[count];
                    count++;
                }
              // set the key value in the dictionary w num as an int
                dict[key] = parseInt(num);
              // reset num
                num = ''
            } else {
              // key is already in the dictionary
                var key = s[count]  // store the key
              // increase count
                count++;
              // reset num
                num = '';
              // while the next chars are numbers
                while(! isNaN(s[count])){
                  // store them in num
                    num += s[count]
                    count++; // increase count
                }
              // add the new number to the existing key value
                dict[key] += parseInt(num) 
            }
        }
    }
    let str = ""
    const orderedKeys = Object.keys(dict).sort(); // [ "a" , "b", "c" ]
    for (const k of orderedKeys) { // loop through each key in the sorted array
        str += k + dict[k]; // "a"  + 184 : a184 += b70 ==> a184b70\
    }
    return str;
    }

console.log(rehash(str1));