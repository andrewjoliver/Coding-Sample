/*
Engineer: Andrew Oliver - andrewjoliver3@gmail.com
Date: 10/20/2019
Functionality: Read in three values - N, p, q. Print the integers 1 to N
(inclusive). If an integer k is divisbly by p and q and k does not contain
p and q, print WATSON. If an integer k is divisible by p and does not
contain p, print WAT. If an integer k is divisible by q and does not contain
q print SON. Otherwise print the integer.
Notes: To run test cases, uncomment function calls in line 78 and 79.
*/

const readline = require('readline');
const assert = require('assert');


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    var lineValues = line.split(" ");
    var N = lineValues[0];
    var p = lineValues[1];
    var q = lineValues[2];
    console.log(watsonProcess(N, p, q));
})

function watsonProcess(N, p, q) {
	var result = '';
	if (N == null || p == null || q == null){
		throw new Error ("Inputs to contains() function must not be null");
	}

	var i;
	for (i = 1; i <= N; i++) {
	  if (i % p == 0 && i % q == 0 && ! contains(i, p) && ! contains(i, q)) result += "WATSON ";

	  else if (i % p == 0 && ! contains(i, p)) result += "WAT ";
	  
	  else if (i % q == 0 && ! contains(i, q)) result += "SON ";
	  
	  else result += (i + " ");
	}
	return result.trimRight();
}

function contains(a, b){
	if (a == null || b == null){
		throw new Error ("Inputs must not be null");
	}
	a = a.toString();
	b = b.toString();
	return (b.indexOf(a) > -1);
}


function testContains(){
	assert(contains(1, 1), "1 is contained in 1");
	assert(contains(1, 19), "1 is contained in 19");
	assert(! contains(0, 9), "0 is not contained in 9");
	assert(contains(203, 2033), "203 is contained in 2033");
	assert(contains(5, 12345), "1 is contained in 1");
	assert.throws(function() { contains(null, null); }, Error);
}

function testWatsonProcess(){
	expectedOutputOne = "1 2 3 4 5 WAT 7 SON WAT 10 11 WATSON 13 14 WAT SON 17 WAT 19 SON";
	assert.equal(watsonProcess(20, 3, 4), expectedOutputOne);
	expectedOutputTwo = "1 2 3 WAT 5 WATSON 7";
	assert.equal(watsonProcess(7, 2 ,3), expectedOutputTwo);
	expectedOutputThree = "1 WAT WAT WATSON WAT WATSON WAT WATSON WAT WATSON";
	assert.equal(watsonProcess(10, 1, 2), expectedOutputThree);
	assert.throws(function() { watsonProcess(null, null, 10); }, Error);
}

// testContains();
// testWatsonProcess();
