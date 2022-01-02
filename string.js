// String

var myName = "Ali"
var myLesson = "JavaScript"

// print: Ali knows JavaScript

console.log(myName + " knows " + myLesson)

//tek tirnak da olabilir

var message = myName + ' knows ' + myLesson
console.log(message)

//boyle de olur
//Ali 'knows' JavaScript 

console.log(myName + " 'knows' " + myLesson)
console.log("Ali 'knows' JavaScript") //hard coding
console.log(myName + ' \'knows\' ' + myLesson)

//Backtick``
//Stringleri daha dinamik birlestirmek icin kullanilir

var message = `${myName} knows ${myLesson}`
console.log(`${myName} knows ${myLesson}`)
console.log(message)
