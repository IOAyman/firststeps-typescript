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
console.log('----------------------------')


//~~~~~~> VAR vs LET
/*
    TL;DR
    Don't use 'var', use 'let'

To learn more about variable declaration
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
console.log('----------------------------')


// function return types
// f(): number ~> returns a number
// f(): void   ~> does not return anything
// f()         ~> same as void
// f(): any    ~> returns something that can be anything

function mod(x:number, y:number): number {
    return x % y
}
console.log('-15 mod 5 is ' + mod(-15, 7))

function isPair(z:number): boolean {
    // return mod(z, 2)     // error!
    return mod(z, 2) === 0
}
console.log(333 + ' is ' + (isPair(333)? '' : 'not ') + 'pair')

// Array<string> === string[]
function addToFront (value, list: Array<string>): string[] {
    let a: string[] = [value]
    // pay attention to this
    for (let v of list)
        a.push(v)
    return a
}
console.log('addToFront(1,["9","0"])=>' + addToFront(1, ["9","0"]))

// x can be either a number or a string
// the callback must be a function that takes a boolean and returns nothing
function isOdd(x:number|string, callback: (boolean)=>void) {
    if(typeof x !== 'number')
        // forcing the type of x to be a string
        x = parseInt( <string> x )
    if (callback)
        callback(!isPair(<number>x))
}
// yeah! Lambdas/Arrow funcions are COOL!
isOdd('333', (isOdd) => {
    console.log(333 + ' is ' + (isOdd? '' : 'not ') + 'odd')
})

// you can *Optionaly* pass an options object
// name and surname are required, but the age is optional
function whoami(options?:{name:string,surname:string,age?:number}) {
    let msg:string = 'Hello, '
    if(options) {
        msg += options.name + ' ' + options.surname
        console.log(options.name + ' ' + options.surname + 
            ' is ' + (options.age || 'Unknown ') + 'yo')
    }
    console.log(msg)
}
whoami()
whoami({name: "Intellijent", surname: "son of dumb"})
whoami({name: "Dumb", surname: "son of intellijent", age: 99})





/*------------------------------------------------------------*\
|                WEIRD & FUN
\*------------------------------------------------------------*/
console.log('----------------------------')

//  Destructuring Objects
const o = {
    iguen: 1,
    sen: 'two',
    tchard: { name: 3 }
}
console.log(JSON.stringify(o))

// extracting only a couple of properties into two separate vars
let { iguen, sen } = o
console.log(`iguen => ${iguen}, sen => ${sen}`)

// let's try something
// let { IGUEN, SEN } = o
// console.log(`IGUEN => ${IGUEN}, SEN => ${SEN}`)

/* that didn't work, right? you got undefined
 * variable names MUST match the property names you want to extract
 * 
 * but,
 * I don't this behaviour! it may get a little confusing :/
 */

// ok, this is how you do it;  assigning to new var names
let { tchard:tlata } = o
console.log(`tchard.name => ${tlata.name}`)


// so let's say you are Constructing an object
const oo = {
    iguen,
    tlata
}
// this is exactly like saying
// oo = { one: one,  tlata: tlata }
console.log(oo)


// let's try some cool use cases, shall we?

/* say you wanna print out some guy's info
 * and you offer to prettify the output
 * normally you would do something like
 * function (name, country, profession, pretty)
 * 
 * but wouldn't it be more logical to group the info 
 * together, and the options together?
 */

// something like this
function whois( {name, birthdate:b=new Date(1962), country, profession}, cb? ){
    let msg = `
Hi, I am ${name.toUpperCase()}, ${country} ${profession}.
I've been around since ${b.getYear()}s.
`
    if (cb) (cb(msg))
    else console.log(msg)
}

// see?  Very Cool!
// we changed the order of arguments
// have default value for birthdate
// and even property renaming as well birthdate => b
whois({
    profession: 'dev',
    name: 'Iblis',
    country: 'DZ'
})

