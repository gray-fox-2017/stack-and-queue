'use strict'

// Your code implementation
class Stack {
  constructor(max) {
    this.arr = [];
    this.MAX_SIZE = max;
  }

  size() {
    console.log(this.arr.length)
  }

  stackPush(x) {
    if(this.arr.length<this.MAX_SIZE){
      this.arr.push(x);
      console.log(`${x} is succesfully added`);
    } else {
      console.log('I\'m afraid you can\'t do that, the stack is full');
    }
  }

  stackPop() {
    if(this.arr.length>0){
      this.arr.pop();
      console.log(`succesfully removed top stack`);
    } else {
      console.log('I\'m afraid you can\'t do that, the stack is already empty');
    }
  }

  first() {
  }

  last() {
  }

  isEmpty() {
    if(this.arr.length===0){
      console.log('Stack is empty');
    } else {
      console.log('Stack is not empty');
    }
  }

  isFull() {
    if(this.arr.length===this.MAX_SIZE){
      console.log('Stack is full');
    } else {
      console.log('Stack is not full');
    }
  }

  stackPeep() {
    console.log(this.arr[this.arr.length-1])
  }
}

let myStack = new Stack(3);
console.log(myStack);
myStack.isEmpty()
myStack.isFull()
myStack.stackPush('satu');
myStack.stackPush('dua');
myStack.stackPush('tiga');
myStack.stackPush('empat');
myStack.isEmpty()
myStack.isFull()
myStack.stackPeep()
myStack.size()
console.log(myStack);
myStack.stackPop();
myStack.stackPop();
myStack.stackPop();
myStack.stackPop();
myStack.isEmpty()
myStack.isFull()
console.log(myStack);

module.exports = Stack
