// TECH QUESTIONS:
// What text editor do you use and why?
// Compare and contrast equality operators in JavaScript and Ruby.
// Do all dynamically-typed languages support type coersion?

// PROMPT:
// As a developer, you are given a string containing multiple words. Create a function that capitalizes all the words in the string. (Can be done in JS or Ruby)

let string1 = 'i am a string that is going to be changed!'

// Create a function that takes in a string of multiple words
const stringCapitalizer = (str) => {
	return str
		.split(' ')
		.map((item) => {
			return item.charAt(0).toUpperCase() + item.substr(1)
		})
		.join(' ')
	// return the string with each word capitalized
}

console.log(stringCapitalizer(string1))

// Option 2:
// TECH QUESTIONS:

// What operating system do you use and why?

// Compare and contrast floats in JavaScript and Ruby. (Optional stretch: What do you get when you divide 0/0 in each language?)

// What is the difference between a function and a method? Does the distinction matter?

// PROMPT:
// As a developer, you are given a multi digit number. Write a function that takes the number and returns an array with a single integer at each index. (Can be done in JavaScript or Ruby)

let number1 = 4568568
let number2 = 97523
let number3 = 5983127756

// Create a function that accepts a multi digit number.
const numberToArray = (num) => {
	// return an array with a single integer at each index
	return num.toString().split('')
}

console.log(numberToArray(number1))
console.log(numberToArray(number2))
console.log(numberToArray(number3))
