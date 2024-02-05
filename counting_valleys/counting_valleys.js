const INSTRUCTIONS = {
	// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step.
	// Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

	// - A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
	// - A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
	// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

	// Example ------------------------------------
	// steps = 8 path = [DDUUUUDD]

	// The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.

	// Function Description -------------------------

	// Complete the counting
	// Valleys function in the editor below.

	// countingValleys has the following parameter(s):

	// int steps: the number of steps on the hike
	// string path: a string describing the path

	// Returns -------------------------------------

	// int: the number of valleys traversed

	// Input Format --------------------------------

	// The first line contains an integer , the number of steps in the hike.
	// The second line contains a single string , of  characters that describe the path.

	// Constraints --------------------------------
	// 2 <= steps <= 10^6
	// path[i] E {UD}

	// Sample Input -------------------------------
	// 8
	// UDDDUDUU

	// Sample Output ------------------------------
	// 1

	// Explanation --------------------------------
	// If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

	// _/\      _
	//    \    /
	//     \/\/
	// The hiker enters and leaves one valley.
}

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

// Write your code here
function countingValleys(steps, path) {
	// this function needs to iterate through the path paramter and count the number of valleys traversed
	// in order to count the valleys, we need to keep track of current altitude, previous altitude, sea level, and how many times sea level is crossed.
	// sea level can always assumed to be 0, negatives are below sea level, and positives are above.
	// a variable can keep track of the times we arrive at sea level when the previous altitude was negative
	// we need a loop which iterates through the path string, and checks if the previous altitude was negative and the current altitude is 0
	// if it meets that condition, we can increase the variable which is counting the traverals
	let prevAlt = 0;
	let currentAlt = 0;
	let valleys = 0;

	for (let i = 0; i < steps; i++) {
		prevAlt = currentAlt;
		if (path[i] === 'U') {
			currentAlt++;
		} else {
			currentAlt--;
		}
		if (prevAlt < 0 && currentAlt === 0) {
			valleys++;
		}
	}
	return valleys;
}

//sample input
countingValleys(8, 'UDDDUDUU'); //Expected output 1

console.log("Counting Valleys: solve time: 23m 19sec"); //1



module.exports = {
	// Your exported function or object properties go here
};