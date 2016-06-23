
// use let to define/declare variables
let zero        // zero may have any type of values
let one: any    // same as zero
let two: string
let three: boolean
let four: number = 4

zero = 'Hello'
zero += ', '

one = zero + ' World!'
one = true

two = zero + 'Aghlane!'
two += 1         // not an error. it's a concatenation
// two = true    // error!

// three = two   // error!

four += 4
// four = three  // error!





// function return types
// f(): number ~> returns a number
// f(): void   ~> does not return anything
// f()         ~> same as void
// f(): any    ~> returns something that can be anything

function mod(x:number, y:number): number {
    return x % y
}

function isPair(z:number): boolean {
    // return mod(z, 2)     // error!
    return mod(z, 2) === 0
}

// Array<string> === string[]
function addToFront (value, list: Array<string>): string[] {
    let a: string[] = [value]
    // pay attention to this
    for (let v of list)
        a.push(v)
    return a
}

// x can be either a number or a string
// the callback must be a function that takes a boolean and returns nothing
function isOdd(x:number|string, callback: (boolean)=>void) {
    if(typeof x !== 'number') {
        // forcing the type of x to be a string
        x = parseInt( <string> x )
    }
    return !isPair( <number> x )
}

// you can *Optionaly* pass an options object
// name and surname are required, but the age is optional
function whoami(options?:{name:string,surname:string,age?:number}) {
    let msg:string = 'Hello, '
    if(options) {
        msg += options.name + ' ' + options.surname
        console.debug('this guy is ' + options.age + 'yo')
    }
    console.log(msg)
}
