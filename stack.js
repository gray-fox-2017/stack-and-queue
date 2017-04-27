'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.arrStack = [];
    this.max = 5;
  }

  size() {
    console.log(this.arrStack.length);
    return this.arrStack.length;
  }

  stackPush(x) {
    if (this.isFull() === true){
      console.log(`Sudah Penuh`)
    } else {
      this.arrStack.push(x);
      console.log(`${x} is added`)
      console.log(this.arrStack);
    }
  }

  stackPop() {
    if (this.isEmpty() === true){
      console.log(`sudah kosong`)
    } else {
      this.arrStack.pop()
      console.log(`removed!`)
      console.log(this.arrStack)
    }
  }

  first() {
    console.log(this.arrStack[0])
  }

  last() {
    console.log(this.arrStack[this.arrStack.length - 1]);
  }

  isEmpty() {
    if(this.arrStack.length == 0 ) { return true; } else { return false; }
  }

  isFull() {
    if(this.arrStack.length >= this.max ) { return true; } else { return false; }
  }

  stackPeep() {
    console.log(this.arrStack[this.arrStack.length - 1]);
    return this.arrStack[this.arrStack.length - 1];
  }
}

let stack = new Stack();
console.log(`The Stack is empty? ${stack.isEmpty()}`)
stack.size();
stack.stackPush('JavaScript')
stack.stackPush('is just so')
stack.stackPush('cool')
stack.stackPush(15)
stack.stackPush('Hacktiv8')
stack.stackPush('keluar')
stack.stackPeep()
stack.stackPop()
stack.stackPop()
stack.stackPop()
stack.stackPop()
console.log(`The Stack is empty? ${stack.isEmpty()}`)
console.log(stack.stackPop())//ga tersedia

module.exports = Stack
