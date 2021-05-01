
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

// javascript: dynamically typed programming language

console.log(typeof (kapcsolo));

function sayHello() {
  console.log('hello!');
  // return undifined
}

function addTwoNumbers(a, b) {
  const sum = a + b;
  console.log(sum);
}

addTwoNumbers(5, 9);

sayHello();

// a querySelectorral először ki kell választani egy elemet, utána fut le a köv. fv.
// document.querySelector('my-element').addEventListener('click', listener)

function addThreeNumbers(a, b, c) {
  const sum = a + b + c;
  return sum;
}

// a console.log() írja ki az értéket
// const result: ez egy deklarálás
// addThreeNumbers(): ez egy fv meghívás
const result = addThreeNumbers(1, 2, 3);
console.log(result);
// ez ugyanaz, mint az előző (nem szükséges mindig a result változót létrehozni):
console.log(addThreeNumbers(1, 1, 1));

result;

// elágazás: vezérlési szerkezet
if (kapcsolo === true) {
  console.log('a kapcsolo be van kapcsolva');
}

if (addThreeNumbers(1, 1, 1) === 3) {
  console.log('az addThreeNumbers jól működik');
} else {
  console.log('az addTrheeNumbers nem jól működik');
}

let n = 9;
n !== 9 && n !== 3; // false
n !== 9 || n !== 3; // true


// ciklus vezérlési szerkezet
//       0-tól  10-ig   egyesével
for (let i = 0; i <= 10; i++) {
  console.log(i + ' hello');
}

n++; // n = n + 1;
console.log(n);

// 10-től megy 0-ig visszafelé -1-gyel:
for (let i = 10; i >= 0; i--) {
  console.log(i + ' hello');
}

// addig fut a ciklus amíg az n >= 0
while (n >= 0) {
  console.log('ez egy while ciklus');
  // csökkentjük az n változó értékét 1-el
  n--; n = n - 1; // ha kihagyjuk a n--;-t, akkor végtelen ciklus lesz, soha nem áll meg
}

const szamok = [2, 5, 4, 5];

console.log('a tömb hossza: ' + szamok.length);

// az i változó csak a for cikluson belül létezik
// block scope
for (let i = 0; i < szamok.length; i++) {
  if (szamok[i] === 5) {
    console.log('a tömb eleme: ' + szamok[i]);
  }
}

// console.log(i); undefined

// function scope:

function myFunc() {
  // lokális változó a myNum: csak a fv-en belül létezik
  const myNum = 10;
}
// not defined!
// console.log(myNum);

console.log('az n változó típusa: ' + typeof (n));

let eredmeny = parseInt('a');

console.log(eredmeny); // NaN: not a number
console.log('az eredmeny tipusa: ' + typeof (eredmeny));

console.log(isNaN(eredmeny));

//  mindig 3 egyenlőségjellel viszgáluk az egyenlőséget
// mert a 2 db egyenlőségjel ne vizsgál típust
0 == 0 // true
0 == '0'; // true!! pedig nem az

0 === '0'; // false (helyesen)

0 == ''; // true! ez sem igaz

0 == '\n'; // true! pedig nem egyenlő vele

'' == '\n'; // false 

console.log('ez egy uj sor: \n uj sorba kerul');

