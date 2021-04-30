
// létrehozzuk a szam változót és értéket is adunk neki
// változó létrehozása: deklarálás
// értékadás: value assignment
let szam = 9;

// value assignment
// a bal oldalon lévő változóba bele töltődik a jobb oldalon lévő érték
szam = 20;

// csak delarálás
let myNumber;

// deklarálni három kulcsszóval lehet:

var a; // ezt nem használjuk
let b; // let-et akkor használjuk a később a változó értékét módosítani akarjuk
const c = 10; // constans: akkor használjuk ha nem akarjuk módosítani az értékét a változónak
const pi = 3.14;

// szám típusú változó: nincs körülötte aposztróf/idézőjel
a = 10;
b = 9;
console.log(a + b);

// string típusú változó
let szoveg = 'hello';

console.log('helo');

console.log(szoveg.toUpperCase());

// tömb: olyan típus, ami több másik típust tud tárolni
const myArray = [3, 'hello', a, ['a', 'b']];

console.log(myArray);

// a tömböt nullától indexeljük:
console.log(myArray[0]);
// a 4 elemű tömb utolsó eleme a 3-dik lenne, 4-edig elem nem létezik
console.log(myArray[4]);

// logikai érték (boolean), true vagy false lehet az értéke
let kapcsolo = true;


