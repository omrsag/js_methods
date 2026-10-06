const languages = ["JavaScript", "Python", "Java", "1"];

console.log(languages.includes("Python")); // true
console.log(languages.includes(1)) // false

//

const message = "Hello Omar";

console.log(message.toLowerCase().includes("omar")); // true

//

const email = "omar@gmail.com";

if (!email.includes("@")) {
    console.log("Invalid email");
}





// return boolean