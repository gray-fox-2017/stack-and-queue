'use strict'

// Your code implementation
class Stack {
  constructor(maxSize=15) {
    this.arr = []
    this.maxSize = maxSize
  }

  size() {
    return `Size stack adalah ${this.arr.length}`
  }

  stackPush(x) {
    if (this.arr.length<=this.maxSize){
      this.arr.push(x);
      return this.arr
    }
    return 'Data sudah penuh'
  }

  stackPop() {
    this.arr.pop();
    return `Data anda saat ini adalah ${this.arr}`
  }

  first() {
    return `Data pertama anda adalah ${this.arr[0]}`
  }

  last() {
    return `Data terakhir anda adalah ${this.arr[this.arr.length-1]}`
  }

  isEmpty() {
    if(this.arr.length === 0){
      return true
    } else {
      return false
    }
  }

  isFull() {
    if(this.arr.length == maxSize){
      return true
    } else {
      return false
    }
  }

  stackPeek() {
    return `Data terakhir anda adalah ${this.arr[this.arr.length-1]}`
  }
}

let myStack = new Stack();

console.log(`The stack is empty? ${myStack.isEmpty()}`)

myStack.stackPush('JavaScript')
myStack.stackPush('is just so')
myStack.stackPush('cool')

myStack.stackPush(15)
myStack.stackPush(30)
console.log(myStack.arr)

myStack.stackPeek()

console.log(myStack.first())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.size())
console.log(myStack.last())

console.log(`The stack is empty? ${myStack.isEmpty()}`)

console.log(myStack.stackPop())

module.exports = Stack
