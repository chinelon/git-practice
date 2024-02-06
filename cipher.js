function cipher(str, shift){
    function shiftChar(char, shift) {
        const isUpperCase = char === char.toUpperCase();
        const alphabetStart = isUpperCase ? 65 : 97;
        const alphabetSize = 26;
    
        if (char.match(/[A-Za-z]/)) {
          const charCode = char.charCodeAt(0);
          const shiftedCharCode = ((charCode - alphabetStart + shift) % alphabetSize + alphabetSize) % alphabetSize + alphabetStart;
          return String.fromCharCode(shiftedCharCode);
        } else {
          return char;
        }
      }
    
      return str.split('').map(char => shiftChar(char, shift)).join('');
}

module.exports = cipher;