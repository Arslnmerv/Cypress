//ARRAY DATA EKLEME VE SILME

var friendList = ['Can' , 'Ece' , 'Ali' , 'Naz']
console.log(friendList)
console.log(typeof(friendList))

//1) push() : Array'in sonuna data ekler

friendList.push('Sinan')
console.log(friendList)

//2) unshift() : Array'in basina data ekler

friendList.unshift('Derya')
console.log(friendList)

//3) pop() : Son datayi siler

friendList.pop()
console.log(friendList)

//4) shift() : Ilk datayi siler

friendList.shift()
console.log(friendList)

var ages = [10, 20, 30, 40, 50, 60, 30]

//5) indexOf(item, from)
console.log(ages.indexOf(20))   //1
console.log(ages.indexOf(50))   //4

console.log(ages.indexOf(30, 3)) //5

//30 rakami 2. defa kacinci indexte var?

//return -1 eslesme yok demek
console.log(ages.indexOf(20, 3))
console.log(ages.indexOf(80))

//6) lastIndexOf();
console.log(ages.lastIndexOf(30))

//7)includes(item, starting index)
console.log(ages.includes(60))
console.log(ages.includes(70))

console.log(ages.includes(40, 3))
console.log(ages.includes(10, 2))

const isExist =ages.includes(40, 3)
console.log(isExist)

const isExist1 =ages.includes(80, 3)
console.log(isExist1)