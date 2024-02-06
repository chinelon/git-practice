function analyzeArray(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return {
        average: undefined,
        min: undefined,
        max: undefined,
        length: 0,
      };
    }
  
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
  
    return {
      average,
      min,
      max,
      length: numbers.length,
    };
  }
  
 /** console.log(analyzeArray([1, 2, 3, 4, 5])); 
  // Output: { average: 3, min: 1, max: 5, length: 5 }
  
  console.log(analyzeArray([])); 
  // Output: { average: undefined, min: undefined, max: undefined, length: 0 }
  
  console.log(analyzeArray([-10, 0, 10, 20])); 
  // Output: { average: 5, min: -10, max: 20, length: 4 }
*/ // Test cases
module.exports = analyzeArray;