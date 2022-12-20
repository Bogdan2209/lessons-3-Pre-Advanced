
// DZ




function CoffeeMake() {
}
CoffeeMake.prototype.on = function () {
    console.log(`Make Coffee`)
}
CoffeeMake.prototype.off = function () {
    console.log(`You coffee is ready`)
}

function Coffee1(on,off) {
    CoffeeMake.call(this, on, off)
}
function Coffee2(on,off) {
    CoffeeMake.call(this, on, off)
}

function Coffee3(on,off) {
    CoffeeMake.call(this, on, off)
}




Coffee1.prototype = Object.create(CoffeeMake.prototype);
Coffee1.prototype.constructor = Coffee1

Coffee2.prototype = Object.create(CoffeeMake.prototype);
Coffee2.prototype.constructor = Coffee2

Coffee3.prototype = Object.create(CoffeeMake.prototype);
Coffee3.prototype.constructor = Coffee3

Coffee1.prototype.milk = function () {
    console.log(`milk`)
}

Coffee2.prototype.sugar = function () {
    console.log(`sugar`)
}

Coffee3.prototype.water = function () {
    console.log(`water`)
}

let coff1 = new Coffee1()
let coff2 = new Coffee2()
let coff3 = new Coffee3()

console.log(`Базовий Функціонал для Кавової мащини 1`)
coff1.on()
coff1.off()
console.log(`Власний Функціонал для Кавової мащини 1`)
coff1.milk()
console.log(`Базовий Функціонал для Кавової мащини 2`)
coff2.on()
coff2.off()
console.log(`Власний Функціонал для Кавової мащини 2`)
coff2.sugar()
console.log(`Базовий Функціонал для Кавової мащини 3`)
coff3.on()
coff3.off()
console.log(`Власний Функціонал для Кавової мащини 3`)
coff3.water()

