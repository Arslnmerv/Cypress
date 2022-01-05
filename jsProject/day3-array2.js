//8) splice(): yeni data ekleyebiliyoruz, kaldirabiliyoruz
//mevcut datayi degistirebiliyoruz.


const months = ['Jan', 'March', 'April', 'June']
console.log(months)

months.splice(1, 0, 'Feb')
//1: 1. indexe ekle
//0: herhangi birseyi silme
//Feb'i ekle

console.log(months)

months.splice(4, 1, 'May')
//4: 4. indexe ekle
//1: ekledikten sonra bir tane sil
//May'i ekle, 4. indexe
console.log(months)

months.splice(5, 0, 'June', 'July', 'August')
//5: 5.indexe 
//0: herhangi birsey silmeden
//'June', 'July', 'August' ekle
console.log(months)

months.splice(5, 3)
console.log(months)

//-1 son index
//-2 son 2 index

months.splice(-1)
console.log(months)

months.splice(-2)
console.log(months)

months.splice(2,0, 'March', 'April', 'May', 'June')
console.log(months)

//9) slice(startIndex(dahil), endIndex(haric))
console.log(months.slice(2))
//2: ilk 2 indexi sil

console.log(months.slice(-3))
//-3: son 3 datayi getirir

console.log(months.slice(2, 5))
//2: index 2 dahil
//5: index 5 haric

