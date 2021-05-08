// Objektumorientált programozás

// függvénnyel is lehet csinálni class-t
// const Cat = function (name) {
//   return {
//     name: name,
//     legsCount: 4,
//     purr: function () {
//       console.log('miau');
//     }
//   }
// };



class Animal {
  eat() {
    console.log('eating...');
  }
}

// ez egy osztály (nem a css-es, csak névrokonság van)
// a class nevet mindig nagy betűvel írjuk (ez egy kód konvenció)
class Dog extends Animal {
  // a constructor egy speciális class metódus: minden példányosításkor lefut automatikusan
  // ez egy speciális metódus (1 ilyen van)
  constructor(name) {
    // a super fv-t kötelező meghívni, ha egy alosztályban constructort használunk
    super();
    this.breed = 'Kuvasz';
    this.legsCount = 4;
    this.name = name;
  }
  bark() {
    console.log('a kutya ugat!');
  }
}

// példányosítjuk a dog class-t (erre akkor van szükség, ha sok példányra kell megnézni)
const myDog = new Dog('Bodri');

console.log(typeof (myDog));
myDog.bark();
myDog.eat();

console.log(myDog.legsCount);

