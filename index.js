const number = 1
const stringNumber = "1"
console.log(number === stringNumber);
console.log(number == stringNumber);

console.log(number !== stringNumber);

// 8. Гурвалжингийн периметрийг олох
let A = 22
let B = 22
let C = 22
console.log(A + B + C);

const Ag = 11
const Bs = 11 
const Cs= 11 
console.log(Ag + Bs+ Cs);

// 9. Тойргийн талбайг олох
const P = 3.14
const R = 3
const Togt = 2
console.log(P*R*Togt);

// 10. m = y2-y1/x2-x1 хариуг олох
const y = 4
const x = 4
const m = y*2-y*1 / x*2-x*1;
console.log(m)

// 11. 15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.
const mb=15
const sec=3
console.log(mb/sec)

// 12. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.

let side1 = 7
let side2 = 7
let side3 = 8
console.log(side1*side2*side3/2);

// 13. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.

let Cel= 24;
console.log(C*9/5+32);

// 14. Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )

let teamA = 96+108+89
console.log(teamA/3)
let teamB = 88+91+110 
console.log(teamB/3);
console.log((teamA/3+teamB/3)/2)


// 15. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*/%) гүцэтгээд үр дүнг нь дараах байдлаар харуул:
// Өгөгдсөн 2 тооны нийлбэр нь 25
// Өгөгдсөн 2 тооны ялгавар нь 5

let huch1 = 101
let huch2 = 10 
let huch3 = huch1 + huch2
let huch4 = huch1 - huch2 
let huch5 = huch1 * huch2 
let huch6 = huch1 / huch2 
let huch7 = huch1 % huch2 
console.log(huch3 + " nimeh uildel " + huch4 + " hasah uildel " + huch5 + " urjih " + huch6 + " huvaah " + huch7 + " huvi ")

// 16. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх

let cm = 10
let inch 
// 18. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич

let i = 565
let o = i / 100
 console.log(Math.floor(o));
 