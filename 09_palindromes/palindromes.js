const palindromes = function(string) {
  const lowerCaseString = string.toLowerCase();

  let alphanumericString = "";
  for (let i = 0; i < string.length; i++) {
    const code = lowerCaseString.charCodeAt(i);
    if (
      code >= 48 && code <= 57 ||  // 0-9
      code >= 97 && code <= 122  // a-z
    ) {
      alphanumericString += lowerCaseString[i];
    }
  }
  
  return alphanumericString === alphanumericString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
