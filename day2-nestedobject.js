//nested object

/*
fName: Ali   ->String
age: 25      ->Number
isEmployed: true ->Boolean
address:      ->Object
      street: 767 5th Avenue
      city: NYC
      state: new York
hobies: swimmming,running, hunting   ->Array
*/

const person = {
    fName: 'Ali' ,
    age: 20,
    isEmployed: true,
    address: {
        street:'767 5th Avenue',
        city:'NYC',
        state: 'New York'
    },
    hobies: ['swimmming' , 'running' , 'hunting' ]
}

console.log(person)
console.log(person.fName)
console.log(person.isEmployed)
console.log(person.address)
console.log(person.address.city)

console.log(person.hobies)
console.log(person.hobies[0])
console.log(person.hobies[4]) //undefined because there is no index