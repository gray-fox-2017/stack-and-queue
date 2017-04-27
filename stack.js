'use strict'

// Your code implementation
class Stack {
  constructor(max = 1000) {
    this.stack = [];
    this.max = max;
  }

  size() {
    return this.stack.length;
  }

  stackPush(x) {
    debugger
    console.log (this.stack.length);
    if (this.stack.length>=this.max) {
      console.log ("Your stack is full. Sorry. Life is cruel.")
    }
    else {return this.stack.push(x);}
  }

  stackPop() {
    return this.stack.pop();
  }

  first() {
    return this.stack[0];
  }

  last() {
    return this.stack[this.stack.length-1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  isFull() {
    return this.stack.length === this.max;
  }

  stackPeek() {
    return this.stack[this.stack.length-1];
  }
}

module.exports = Stack

let myStack = new Stack();

// Check if empty
console.log("Check if empty: " + myStack.isEmpty());

// Add new element
myStack.stackPush('JavaScript');
myStack.stackPush('is just so');
myStack.stackPush('cool');

// Add any type of element
myStack.stackPush(15);

// Check the uppermost data
console.log("I\'m peeking! The uppermost data is: ", myStack.stackPeek());

// Delete an element
myStack.stackPop();
console.log("I\'m peeking again. This time after popping the stack: ", myStack.stackPeek());

// Check first and last element
console.log("The uppermost element: ", myStack.first());
console.log("The lowermost element: ", myStack.last());

console.log("Check if full: " + myStack.isFull());
console.log(myStack);
