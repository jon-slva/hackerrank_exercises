// @ts-nocheck

const INSTRUCTIONS = {
	// There is a string, "s", of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.

	// Example ------------------------------
	// s = "abcac"
	// n = 10

	// The substring we consider is, the first 10 characters of the infinite string.There are 4 occurrences of "a" in the substring.

	// Function Description ------------------------------
	// Complete the repeatedString function in the editor below.

	// repeatedString has the following parameter(s):

	// - s: a string to repeat
	// - n: the number of characters to consider

	// Returns ------------------------------
	// int: the frequency of a in the substring

	// Input Format ------------------------------
	// The first line contains a single string, s.
	// The second line contains an integer, n.

	// Constraints ------------------------------
	// - 1 <= | s | <= 100
	// - 1 <= n <= 10^12
	// - For 25% of the test cases, n <= 10^6 .

	// Sample Input ------------------------------

	// Sample Input 0
	// aba
	// 10

	// Sample Output 0
	// 7

	// Explanation 0
	// The first  letters of the infinite string are abaabaabaa.Because there are  a's, we return .

	// Sample Input 1
	// a
	// 1000000000000

	// Sample Output 1
	// 1000000000000

	// Explanation 1
	// Because all of the first  letters of the infinite string are a, we return .
}

function repeatedString(s, n) {
	// Write your code here

	// let count = 0;

	// let num = n / s.length;
	// const multiple = Math.ceil(num);
	// const newArr = s.repeat(s.length * multiple);

	// for (let i = 0; i < n; i++) {
	// 	if (newArr[i] === 'a') {
	// 		count++;
	// 	}
	// }
	// return count;

	let countAInS = [...s].filter(letter => letter === 'a').length; // finds a in the string - we do this because filter can only run on an array, not a string
	let times = Math.floor(n / s.length); // finds how many times the string repeats inside of n
	let remainder = n % s.length; // the remainder of how many letters are left after full repeats of the string
	// console.log(countAInS)
	// console.log(times)
	// console.log(remainder)

	let countAInRemainder = [...s.slice(0, remainder)].filter(letter => letter === 'a').length; // finds a in the remainder - same thing again here, we need to convert the string to an array to use filter

	return times * countAInS + countAInRemainder; // returns the total count of a's
}

// console.log(repeatedString('a', 1000000000000)) // 7

console.log(`Repeated String:
Solve Time:59min`)
console.groupCollapsed('Notes')
console.log(`I had the right instinct to find a multiple, etc. But my original attempt tried to make an array far too long for JS in some cases.
By the time I got there, I had to figure something else out. My original instinct was I would need modulus or something in the calculation of the range.
But this method used here escapes me a bit. I was on the right track, and overcomplicated it, as well as coming at it from the wrong angle.`)
console.groupEnd()

console.log('-----------------------------')

module.exports = {}