// Class declaration
class User {
    public PUBLIC_FIELD

    private _name: string
    private _surname: string
    private _age: number

    constructor(name: string) {
        this._name = name
    }

    // getters and setters must have the same type!
    // if set takes number|string; get must return number|string
    set age(age: number | string) {
        if (typeof age !== 'number') age = parseInt(<string>age)
        this._age = <number>age
    }
    get age(): number | string { return this._age }
    set surname(name: string) { this._surname = name }
    get surname() { return this._surname }

    // public/private methods
    public present() {
        console.log('Hi, my name is ' + this._name + ' ' + this._surname)
    }

    // a function may even be static
    static whatIsThisObject() {
        console.log("this is a Person object -_- it's obvious!")
    }
}

// static function
User.whatIsThisObject()
let you = new User('You')
you.present()
you.age = '15'
you.surname = 'Tashromt'



class Admin extends User {
    public PROFILE: string = 'https://github.com/IOAyman'
}

let me = new Admin('Ayman')
console.log(me.PROFILE)



// enums are cool
enum ENV {
    Production, Development, Testing
}

// interfaces can be used like in other languages
// but here is one cool thing that might seem weird
interface Options {
    one: string,
    two?: string,
    playWithData: (ENV) => any
}

// now you can use that interface like a variable Type
function doSomething(ops: Options) {
    console.log('One: ' + ops.one)
    console.log('Two: ' + ops.two)
    // ops.playWithData()  // error!
    ops.playWithData(ENV.Development)
}





namespace IONamespace {
    // You must *export* for use out of the namespace
    export class User {
        public something
        constructor() { console.log('new IONamespace.User') }
    }
}
// this would cause an error if the class was not exported
let iome = new IONamespace.User()
