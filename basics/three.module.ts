// exporting a class
export class PartOne {
    constructor (name?:string) {
        console.log("PartOne instantiated by [" + (name||'Unknown') + "]")
    }
}

// exporting a class
export class PartTwo {
    constructor() { console.log('PartTwo instantiated') }
}

// exporting a **Default** class
export default class PartZero {
    constructor() { console.log('Part ZERO is liiiiive :D') }
}