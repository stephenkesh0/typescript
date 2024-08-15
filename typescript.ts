// How to write a "string" in Typescript
let firstName: string = "Taiwo"

// How to write a "number" in Typescript
let accountNumber: number = 23456789

// How to write a "boolean" in Typescript
let isMarried: boolean = true

// How to write a "null" in Typescript
let dept: null = null

// How to write a "undefined" in Typescript
let accountBalance: undefined = undefined

// How to write a "any" in Typescript
let girFriend: any = 27



// How to write an "Arays" in Typescript
let num: number[] = [1,2,3,4,5]
let names: string[] = ["lee", "cm", "DML"]
let num2: Array<number> = []
let names2: Array<string> = []


// How to write a "Tuple" in Typescript
let person: [string, number, boolean] = ["Francis", 7898789, false]

let person2: [string, number, boolean] = ["Queepe", 8264339, true]


// How to create an "Enum" i Typescript
enum paymentMethod{
  cashapp,
  zelle,
  venmo,
  paypal
}

enum HttpStatus {
  Ok = 200,
  NOTFOUND = 404,
  SERVERERROR = 500
}

let myStatus: HttpStatus = HttpStatus.Ok
console.log(myStatus);


// How to create a "Function" in typescript
const profit = (cp:number, sp:number): number => {
  return sp-cp
}
console.log(profit(6, 8));

// Do this when you want to write "console.log"
const greet = (name:string): void =>{
  console.log(`Hello + "Stephen" + name`);
  
}

// Do this when you want to write "return"
const greet2 = (name:string): string =>{
  return `Hello + "Stephen" + name`;
  
}
console.log(greet2);


// How to create a "Union" in typescript
let value: string | number | null | boolean
value = "lee"
value = 25
value = null
value = true

// How to create a "Type Alias" in typescript
type Bolu = undefined | number
let phone: Bolu = 8080898765

type Eba = string
let food: Eba = "Garri"

// How to create a "Class"  in typescript
class Animal {
  name: string
  legs: number
  fur: boolean
  constructor(name: string, legs: number, fur: boolean){
    this.name = name
    this.legs = legs
    this.fur = fur
  }

  sound(){
    console.log("Animal Sound");
    
  }
}

class Dog extends Animal{
  // Private property
private genotype: string
// Inheritance
  breed: string
  constructor(name: string, legs: number, fur: boolean, breed: string){
    super(name, legs, fur)
    this.breed = breed
  }

  // Polimorphism
  sound(){
    console.log("Barks");
    
  }
}

// How to create a "Interface"  in typescript
interface Animal{
  name: string
  legs: number
  fur: boolean
  sound(): void
}