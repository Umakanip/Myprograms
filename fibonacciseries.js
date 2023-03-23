
const prompt=require("prompt-sync")({sigint:true});

// program to display fibonacci sequence
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

// take input from the user
const input = prompt('Enter the number of terms: ');

if(input <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < input; i++) {
        console.log(fibonacci(i));
    }
}