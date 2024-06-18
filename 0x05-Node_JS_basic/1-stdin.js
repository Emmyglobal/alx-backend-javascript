//import readline
const readline = require('readline');

const cmd = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//display message
console.log('Welcome to Holberton School, what is your name?\n');

cmd.on('line', (name) => {
	console.log(`Your name is: ${name}`);
});

cmd.close('close', () => {
	console.log('This important software is now closing\n');
});
