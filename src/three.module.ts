export class PartOne {
    constructor (name?:string) {
        console.log("PartOne instantiated by [" + (name||'Unknown') + "]")
    }
}

export class PartTwo {
    constructor() { console.log('PartTwo instantiated') }
}

export default class PartZero {
    constructor() { console.log('Part ZERO is liiiiive :D') }
}