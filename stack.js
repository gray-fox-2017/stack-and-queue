'use strict'

// Your code implementation
class Stack {
  constructor(MAX_SIZE = 5) {
    this.max = MAX_SIZE
    this.stack = []
  }

  size() {
    return this.stack.length
  }

  stackPush(x) {
    if(this.size() < this.max){
      console.log(`${x} pushed!`)
      this.stack.push(x)
    }
    if (this.stack >= this.max) {
      console.log("Sorry uda full coy")
    }
  }

  stackPop() {
    if(this.size() > 0){
      return `${this.stack.pop()} Popped!`
    }
    else{
      console.log("stack kosong gak ada yang bisa di pop")
    }
  }

  last() {
    if(this.size() > 0){
      return `Last adalah: ${this.stack[0]}`
    }
    else {
      console.log ("stack kosong apa yang mau diliat?")
    }
  }

  first() {
    if (this.size() > 0){
     console.log(`First adalah:${this.stack[this.size()-1]}`)
    }
    else{
      console.log("stack kosong apa yang mau diliat?")
    }
  }

   isEmpty() {
    if (this.size() === 0){
      return true
    }
    else{
      return false
    }
  }

  isFull() {
    if(this.size() === this.max){
      return true
    }
    else {
      false
    }
  }

  stackPeep() {
    console.log(this.first())
  }
}

let myStack = new Stack(15)
console.log(`The stack is empty? ${myStack.isEmpty()}`)

console.log(myStack.size())
myStack.stackPush("Javascript")
console.log(myStack.size())
myStack.stackPush("is just so")
console.log(myStack.size())
myStack.stackPush("Cool")
console.log(myStack.size())

myStack.stackPush(15)

myStack.stackPeep()

console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())

console.log(`The stack is empty? ${myStack.isEmpty()}`)

console.log(myStack.stackPop())

module.exports = Stack
