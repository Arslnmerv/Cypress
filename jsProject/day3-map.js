//MAP
//bir arrayden yararlanarak yeni array olusturmak icin

var originalArray = [2, 4, 6, 8, 10]
console.log(originalArray)
function double(x){
    return x*2
}

const newArray = originalArray.map(double)
    console.log(newArray)

    const newArray1 = originalArray.map(function double(x){
        return x*2
    })

    //filter()

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    //10 dan buyuk sayilar

    const filtreSayilar = numbers.filter(eachNum => eachNum>10)
    console.log(filtreSayilar)

    // cift sayilar 
    let cift = numbers.filter(n => n %2 !==0)
    console.log(cift)

    // tek sayilar 
    let tek = numbers.filter(n => n %2 !==0)
    console.log(tek)

    //filter() arrays


    var people = [{
        id:1,
        name:'John',
        age:28
    },
    {
        id:2,
        name: 'Jane',
        age:32
    },
    {
        id:3,
        name:'Peter',
        age:55
    }
]

let young = people.filter(x => x.age <35)
console.log(young)


let old = people.filter(x => x.age >30)
console.log(old)
