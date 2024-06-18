//import readline
const readline = require('readline');

const cmd = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//display message
console.log('Welcome to Holberton School, what is your name?');

cmd.on('line', (input) => {
	console.log(`Your name is: ${input}`);
	cmd.close();
});

cmd.on('close', () => {
	console.log('This important software is now closing');
});
