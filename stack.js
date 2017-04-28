'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.stack = [];
    this.maxsize = 3;
  }

  size() {
  // console.log(this.stack.length);
  return this.stack.length
  }

  stackPush(x) {
    this.stack.push(x);
  }

  stackPop() {
    this.stack.pop();
  }

  first() {
    console.log(this.stack[0]);
  }

  last() {
    console.log(this.stack[this.size() - 1]);
  }

  isEmpty() {
    if (this.size() !== 0){
      console.log("Stack is not empty");
      // return false
    } else {
      console.log("Stack is empty");
      // return true
    }
  }

  isFull() {
    if (this.size() == this.maxsize){
      return true
      console.log("true")
    } else {
      console.log("false")
      return false
    }
  }

  stackPeep() {
  }
}

module.exports = Stack

let myStack = new Stack();
myStack.isEmpty();
myStack.stackPush('JavaScript');
myStack.stackPush('is just so');
myStack.stackPush('cool');
console.log(myStack.size());
myStack.stackPush(15);
myStack.last();
myStack.stackPop();
myStack.stackPop();
myStack.stackPop();
myStack.stackPop();
myStack.isEmpty();
