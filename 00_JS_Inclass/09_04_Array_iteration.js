//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

console.log("****** ITERATION **********");

//
//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

const prices = [100, 250, 50, 89];
prices.forEach((p) => console.log(p));
console.log(prices.forEach((p) => p)); //! undefined

//? ORNEK: prices dizisindekilerin toplamini konsola yazdiriniz */
let sum = 0;
prices.forEach((price) => (sum += price));
console.log("SUM:", sum);

//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
console.log(prices.forEach((price) => (sum += price))); //! undefined

//?-------------- ÖRNEK -------------------
//? prices dizisindeki her bir ara toplam degerini
//? konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz.

// let total = 0;
// prices.forEach((price, index, arr) => {
//   total += price;
//   console.log(`${index + 1}.iteration: ${total}`);
//   arr[index] = Math.trunc(price * 1.1);
// });

// console.log(prices);

//* ======================================================
//*                       MAP METHOD
//* ======================================================

//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

// const bigNames = names.map((name) => name.toUpperCase());
// console.log(bigNames, names);
// console.log(names.map((name) => name.toUpperCase()));

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const euroPrices = tlPrices.map((tl) => Number(tl / euro).toPrecision(3));
console.log(euroPrices);

const dolarPrices = tlPrices.map((tl) => Number(tl / dolar).toFixed(2));
console.log(dolarPrices);

//?-------------- ÖRNEK -------------------
//? products dizisinin icerisindeki her urunu (Orjinal dizideki)
//? buyuk harf olarak degistirelim.

const products = [
  "Iphone12",
  "samsungS20",
  "lenovo",
  "macbook pro",
  "mac air",
  "Galaxy tablet",
  "macbook",
  "Iphone12",
  "mac air",
  "lenovo",
  "macbook pro",
  "samsungS20",
];
//! Orjinal diziyi degistidik.

products.map((p, i, arr) => (arr[i] = p.toUpperCase()));
console.log(products);

//* ======================================================
//*                CHAINING (PIPELINE)
//* ======================================================

//* ======================================================
//*                 FILTER METHOD
//* ======================================================
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

let cok = salaries.filter((n) => 9000 > n).map((n) => Math.trunc(n * 1.1));
console.log(cok);

const bigThan = salaries.filter((s) => s > 10000);
console.log(bigThan, salaries);

const range = salaries.filter((s) => s >= 6000 && s <= 10000);
console.log(range);

//?-------------- ÖRNEK -------------------
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

const lessThan9000Increase = salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1));

console.log(lessThan9000Increase);

salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1))
  .forEach((s) => console.log(s));
//* ======================================================
//*                 REDUCE METHOD
//* ======================================================

console.log("*************");
// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

//! başlangıç değeri (value) defaultu 0'dır.
//? reduse bir değer döndürür.
// salaries dizisindeki elemanların toplamını yazınız.

const someOfSalaries = salaries.reduce((toplam, value) => toplam + value, 0);

// çarpma gibi diğer işlemlerde yapılabilir.
// const someOfSalaries1 = salaries.reduce((toplam, value) => toplam * value, 1);

console.log(someOfSalaries);

//? Ornek: Bir Firma, 9000 TL den az olan maaşlara %10 zam yapmak istiyor
//? ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek istiyor.
//? İlgili programı yazınız.

const zamlıToplam = salaries
  .filter((x) => x <= 9000)
  .map((x) => Math.trunc(x * 1.1))
  .reduce((top, val) => top + val, 0);

console.log(zamlıToplam);
