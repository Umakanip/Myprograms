
const prompt=require("prompt-sync")({sigint:true});

// Javascript program to find the length of
// the longest balanced substring

// Function to check if a string contains
// equal number of one and zeros or not
function isValid(p)
{
	var n = p.length;
	var c1 = 0, c0 = 0;
	
	for(var i =0; i < n; i++)
	{
		if(p[i] == '0')
			c0++;
		if(p[i] == '1')
			c1++;
	}
	
	return (c0 == c1) ? true : false;
}

// Function to find the length of
// the longest balanced substring
function longestSub(s)
{
	var max_len = 0;
	var n = s.length;
	
	for(var i = 0; i < n; i++)
	{
		for(var j = i; j < n; j++)
		{
			if(isValid(s.substr(i, j - i + 1)) && max_len < j - i + 1)
				max_len = j - i + 1;
		}
		
	}
	return max_len;
	
}

// Driver code
// take input from the user
const input = prompt('Enter the String: ');
//var input = "101010";

// Function call
console.log(longestSub(input));

