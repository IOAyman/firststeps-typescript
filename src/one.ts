/*------------------------------------------------------------*\
|                VARIABLES
\*------------------------------------------------------------*/


// use let to define/declare variables
let zero        // zero may have any type of values
let one: any    // same as zero
var two: string // you can use 'var' if you want (but don't!)
let three: boolean
let four: number = 4

zero = 'Hello'
zero += ', '
console.log('zero['+ typeof zero +']=' + zero)

one = zero + ' World!'
one = true
console.log('one['+ typeof one +']=' + one)

two = zero + 'Aghlane!'
two += 1         // not an error. it's a concatenation
console.log('two['+ typeof two +']=' + two)
// two = true    // error!

three = !true
// three = two   // error!
console.log('three['+ typeof three +']=' + three)

four += 4
// four = three  // error!
console.log('four['+ typeof four +']=' + four)


const CONSTANT = 0x10
// CONSTANT = 16 // error!
console.log('CONSTANT[' + typeof CONSTANT + ']=' + CONSTANT)





/*------------------------------------------------------------*\
|                Gotchas
\*------------------------------------------------------------*/


//~~~~~~> VAR vs LET
/*
    TL;DR
    Don't use 'var', use 'let'

To learn more about variable declaration, **decomposition and distruction**
@see
http://www.typescriptlang.org/docs/handbook/variable-declarations.html
*/


//~~~~~~> LOOPS

// watch out for this gotcha!
let list = ['one','two','three','four']
// (i IN list) iterates over keys
for (let i in list) console.log(i)
// (i OF list) iterates over values
for (let i of list) console.log(i)
/*
Targeting ES5 and ES3

When targeting an ES5 or ES3, iterators are only allowed on values
of Array type. It is an error to use for..of loops on non-Array
values (such as Maps and Sets), even if these non-Array values
implement the Symbol.iterator property.

@see
http://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
*/





/*------------------------------------------------------------*\
|                FUNCTIONS
\*------------------------------------------------------------*/


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
