//OBJECT{}
//Objectler data kaydetmek icin kullanilir
//{} ile olusturulur

var fName = 'Ali'
var lName ='CAN'
var age = 25
var info = ` ${fName} ${lName} ${age}`
console.log(info)


//person object

var person = {
    fName: 'Ali',
    lName: 'CAN',
    age: 25,
    isEmployed: true 
}
console.log(person)
console.log(typeof(person))  //object

//Bilgileri cagirma 
//1).notation

console.log(person.fName)
console.log(typeof(person.fName))
console.log(person.lName)
console.log(typeof(person.age))

//2)[] notation
console.log(person['fName'])
console.log(person['lName'])
console.log(person['age'])
