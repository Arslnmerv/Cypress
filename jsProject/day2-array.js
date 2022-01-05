//ARRAYS

//1.way
var friendList = ['Can' , 'Ece' , 'Ali', 'Naz']

//2.way
var friendList1 = new Array('Can' , 'Ece' , 'Ali', 'Naz')

console.log(friendList)
console.log(friendList1)
console.log(friendList[0])
console.log(friendList[3])
console.log(friendList[10]) //undefined index yok

//Can --> Han
friendList[0] = 'Han'
console.log(friendList)

//Naz --> Derya
friendList[3] = 'Derya'
console.log(friendList)

//Yeni Deger Ekleme --> +Deniz
friendList[4] = 'Deniz'
console.log(friendList)

friendList[7] = 'Sinan'
console.log(friendList)
