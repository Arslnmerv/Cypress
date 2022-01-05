//Fonksiyonlar 

//1- Parametresiz Fonksiyon

function greet() {
    console.log("Hi!")
}

greet()

//2-Parametreli Fonksiyon

function greetPeople(namePeople) {
    console.log('Hi! ' + namePeople)
}

greetPeople('Ali')     //Hi! Ali
greetPeople(true)      //Hi! true
greetPeople(20)        //Hi! 20
greetPeople(null)      //Hi! null
greetPeople(undefined) //Hi! undefined
greetPeople()          //Hi! undefined
greetPeople('ali', 'ece') //Tek parametreli fonksiyon old. icin ilkini alir.

// Ali 42
// Ece 27

function adYas(ad, yas) {
    console.log(ad + yas)
}

adYas('Ali ', 42)
adYas('Ece ', 27)


function info(location, price, rating) {
    console.log(location + ' ' + price + ' ' + rating)
}

info('Ist', 10000, "5 stars")
info('Nyc', 10000, " stars")

