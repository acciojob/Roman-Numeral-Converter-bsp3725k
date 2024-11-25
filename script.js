function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result = "";

  // Iterate through each Roman numeral starting with the largest
  for (let key in obj) {
    let [roman, value] = obj[key];
    // While the current number is greater than or equal to the value
    while (num >= value) {
      result += roman; // Append the Roman numeral
      num -= value;    // Reduce the number
    }
  }

  return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 //console.log(convertToRoman(14));
// do not edit below this line
module.exports = convertToRoman
