// @ts-nocheck

const INSTRUCTIONS = {
	// There is a new mobile game that starts with consecutively numbered clouds.Some of the clouds are thunderheads and others are cumulus.The player can jump on any cumulus cloud having
	// a number that is equal to the number of the current cloud plus 1 or 2. The player must avoid the thunderheads.Determine the minimum number of jumps it will take to jump from the
	// starting postion to the last cloud.It is always possible to win the game.

	// For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.

	// EXAMPLE --------------------------

	// Index the array from .The number on each cloud is its index in the list so the player must avoid the clouds at indices 1 and 5. They could follow these two paths: 0 > 2 > 4 > 6 or 0 > 2 > 3 > 4 > 6.
	// The first path takes 3 jumps while the second takes 4. Return 3.


	// Function Description --------------------------

	// Complete the jumpingOnClouds function in the editor below.
	// jumpingOnClouds has the following parameter(s):
	// - int c[n]: an array of binary integers
	// Returns --------------------------
	// int: the minimum number of jumps required
	// Input Format --------------------------
	// The first line contains an integer, the total number of clouds.The second line contains 'n' space-separated binary integers describing clouds c[i] where 0 <= i < n.

	// Constraints --------------------------
	// 2 <= n <= 100
	// c[i] is either 0 or 1
	// c[0] = c[n - 1] = 0

	// Output Format --------------------------

	// Print the minimum number of jumps needed to win the game.

	// Sample Input A --------------------------
	// 7
	// 0 0 1 0 0 1 0

	// Sample Output A --------------------------
	// 4
	// Explanation A: --------------------------
	// The player must avoid  and.The game can be won with a minimum of  jumps:
	sampleA: "../jumping_on_the_clouds/sample_input_a.png",
	// Sample Input B

	// 6
	// 0 0 0 0 1 0
	// Sample Output B

	// 3
	// Explanation B:
	// The only thundercloud to avoid is.The game can be won in jumps:
	sampleB: "../jumping_on_the_clouds/sample_input_b.png",
}


function jumpingOnClouds(c) {
	// Write your code here
	// avoid 1, 0 are safe
	//indexes are the cloud's numbers
	// can jump to any cloud who's index is +1 or +2 from current index

	// jumps variable
	// iterate through an array of clouds (loop)
	// check if the next cloud is safe (+1), if so, skip to that index, jumps ++ 
	// if not safe, check the next cloud after (+2), if safe, skip to that index jumps ++ 
	// return jumps

	let jumps = 0;

	for (let i = 0; i < c.length - 1;) { // I had no idea I could omit the auto-incrementer and handle it in the loop.
		// additionally, we use c.length - 1 because we're checking the next index of +1 or +2. This makes sure when we get to the end without going out of bounds. 
		if (c[i + 2] < c.length && c[i + 2] == 0) {
			// console.log(jumps, `jumped from ${i} to ${i + 2}`)
			i += 2;
		} else {
			i++;
		}
		jumps++;
	}
	return jumps;
}

// console.log(jumpingOnClouds([0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0])); // 3

console.log(`Jumping on the Clouds:
Solve Time: 52min`)
console.groupCollapsed('Notes')
console.log('figuring out how to iterate based on condition. Figured out that I could control iteration within the loop body instead of at the end of the loop statement itself.')
console.groupEnd()

console.log('-----------------------------')

module.exports = {}