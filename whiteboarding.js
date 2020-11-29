// TECH QUESTIONS:

// What text editor do you use and why?
// It's funny how attached one can get to a text editor. When I first started learning to code, I used Sublime Text. As time went on, I changed over to Atom which I liked okay. It was familiar and simple to use. As I continued being exposed to more and more in my code learning journey, it became evident that I was going to have to up my game and switch to VSCode. So, I downloaded and installed it and about two minutes later said, "Forget this! This is way too complicated!". I was spending so much time, energy and effort learning to code that I didn't want to divert my focus to learning this text editor but I knew I had to figure this VSCode thing out. I watched some tutorials by developers that I follow and slow but sure, I was now coding in VSCode! Fast forward to today (about a year later), I am utterly and completely IN LOVE 💘 with VSCode. Now don't get me wrong, it's been a learning experience for sure and plenty of time has been spent troubleshooting but it's all been worth it! Oh, let me count the ways.... The extensions available in VSCode are extensive and so helpful for productivity. The git controls make using git much more manageable because it's easy to see what's been modified (and much more) in a clear visual way. The integrated terminal is brilliant! No more bouncing out of the text editor to fiddle around in the terminal. Everything is right there ready to do my bidding! I get excited by learning shortcuts and key bindings. And yes, I geek out and watch videos about VSCode to learn these things. As a developer, I believe that the tools we use are important and lend to the quality of our creations. I also geek out on useful Chrome extensions 🤣. I can't live with out the React Developer Tools extension or OneTab or LastPass or JSON Viewer....Okay, Okay! I'll stop but seriously so many awesome productivity tools!

// Compare and contrast equality operators in JavaScript and Ruby.
// JavaScript supports type coercion so it offers the ability to compare strict equality (===) and loose equality (==). Loose equality compares two values for equality after converting both values to a common type. Whereas, strict equality compares each value based on it's type and value. If the values have different types, the values are returned as not equal.
// In Ruby there is no type coercion so equality is evaluated based on the values using only (==). There is no converting values, Ruby compares them exactly as they are given.

// Do all dynamically-typed languages support type coercion?
// No, there are dynamically-typed languages that both support and do not support type coercion.

// PROMPT:
// As a developer, you are given a string containing multiple words. Create a function that capitalizes all the words in the string. (Can be done in JS or Ruby)

let string1 = 'i am a string that is going to be changed!'
let string2 = 'hooray! i am an amazing sentence!'

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
console.log(stringCapitalizer(string2))

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
