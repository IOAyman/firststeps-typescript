// import a class from a separate module
// of course, you must not include .ts!
import { PartOne } from './three.module'
// using the 'as' thing
import { PartTwo as PT } from './three.module'
// this is how you import the **Default** exported class
import PartZero from './three.module'

new PartOne()
new PartOne('Me')

new PT()

new PartZero()
