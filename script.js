function convertToRoman(num) {
 // Define the Roman numeral symbols and their values
  const romanSymbols = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];

  let roman = ''; // Initialize the Roman numeral string

  // Iterate through the symbols and values
  for (const [symbol, value] of romanSymbols) {
    while (num >= value) {
      roman += symbol; // Add the symbol to the Roman numeral
      num -= value; // Subtract the value from the number
    }
  }

  return roman;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(798));
// do not edit below this line
module.exports = convertToRoman();
