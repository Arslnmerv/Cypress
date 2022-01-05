//Fonksiyonlar

function sum() {
    var num1 = 10
    var num2 = 20
    var num3 = 30
    var total = num1 + num2 + num3
    return total
}
console.log(sum())

function cikarma() {
    var num1 = 10
    var num2 = 20
    var num3 = 30
    var total = num3 - num2 - num1
    return total
}
console.log(cikarma())

//FONKSIYON TANIMLAMA

function fonksiyonIsmi(parametre1 , parametre2) {
        return donusDegeri
}

//1-Parametresiz Fonksiyon 

function greet () {
    console.log('Hi!')
}

greet()

//2-Parametreli Fonksiyon 

function greetpeople(nameOfPeople) {
    console.log('Hi!' + nameOfPeople)
}

greetpeople('Ali')
greetpeople(null)
greetpeople('Naz' , 'Ece')
greetpeople(false)
greetpeople()

//3-Birden Fazla parametreli Fonksiyon

function information (location, price, rating) {
    console.log(`location : ${location}.
     Price : ${price}.
      Rating : ${rating}`)
}

information('New York' , '2000' , '5')

//Fonksiyon cagirip yeni bir degiskende saklama

const mySum = sum() + 100
console.log(mySum)

//Fonksiyonu parametre ve return ile cagirma

function diff(num1 , num2){
    return num1 - num2
}

console.log(diff(100,50))
console.log(diff(1000,50))

//Fonksiyonlari 2 sekilde tanimlayip cagirabiliyoruz
//1) Direkt tanimlama ve cagirma 
//2) Fonksiyonu bir degisken ile tanimlayip cagirma

function square(num){
    return num*num
}

console.log(square(8))

const squareofNumber = function square(num){
    return num*num
}
console.log(squareofNumber(8))