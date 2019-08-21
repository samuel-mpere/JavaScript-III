/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The principle of Window Binding
     Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
     If none of the other rules are met, then JavaScript will default the this keyword to reference the window object.

* 2. The principle of Implicit Binding
     Whenever a function is called by a preceding dot, the this keyword is referecing to the object on the left of the dot.

* 3. The principle of New Binding
    Whenever you invoke a function with the new keyword, JavaScript will create a brand new object and call it this. If a function was called with new, the this keyword is referencing that new object that was created.


* 4. The principle of Explicit Binding

    Whenever we invoke a function specifying where exactly and in what context we hope to invoke it we use the methods, 'call', 'apply' and 'bind'. These methods explicitly points us to which object 'this' should refer to. 
    'call' is the standard method normally used.
    'apply' is used when it's preferable to output an array.
    'bind' is used to return an entirely different version of the referenced object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

annualSalary = 1200;

function monthlySalary () {
  console.log(`My monthly salary is ${this.annualSalary / 12}`);
}

console.log(monthlySalary());// gives: My monthly salary is 100

// Principle 2

// code example for Implicit Binding

const system = {
    title: 'solar system',
    planets: 12,
    habitable: 'earth',
    warn() {
      console.log(`Warning!, avoid all planets, except ${this.habitable}`)
    },
    system2: {
      name: 'Alpha Centauri',
      planets: 20,
      habitable: 'Illus',
      warn() {
        console.log(`Warning!, avoid all planets, except ${this.habitable}`)
      }
    }
  }

console.log(system.warn()); //returns 'Warning! avoid all planets, except earth'

console.log(system.system2.warn()); // 'Warning! avoid all planets, except Illus'


// Principle 3

// code example for New Binding

function System (name, numberOfPlanets, habitablePlanets){
    this.name = name;
    this.planets = numberOfPlanets;
    this.habitable = habitablePlanets;
}

let portal = new System('Laconia', 3, 'New Terra');

console.log(portal);

// Principle 4

// code example for Explicit Binding
function baz(name, age) {
    console.log(this); 
    return name + ' your age is ' + age; 
  }
  
  baz.call('banana', 'Shaun', 35); 
  