'use strict'

// Your code implementation
class Stack {
  constructor(max_size=15) {
    this.arr = [];
    this.maxSize = max_size;
  }

  size() {
    return this.maxSize;
  }

  stackPush(x) {
    if (this.isFull()) {
      return false;
    } else {
      (this.arr).push(x);
    }
  }

  stackPop() {
    if (this.isEmpty()) {
      return false;
    } else {
      (this.arr).pop();
    }

  }

  first() {
    return this.arr[this.arr.length - 1];
  }

  last() {
    return this.arr[0];
  }

  isEmpty() {
    if (this.arr[0] == undefined) {
      return true;
    } else {
      return false;
    }
  }

  isFull() {
    if (this.arr.length == this.size()) {
      return true;
    } else {
      return false;
    }
  }

  stackPeep() {
    return this.arr;
  }
}

// module.exports = Stack
//
let myStack = new Stack();

console.log(`The Stack is empty? ${myStack.isEmpty()}`); // true jika kosong

myStack.stackPush("Javascript");
myStack.stackPush("is just so");

myStack.stackPush(15);
console.log("Inside my stack ", myStack.stackPeep());
console.log("The first out is ",myStack.first());
console.log("The last out is ",myStack.last());

console.log(`The stack is empty? ${myStack.isEmpty()}`);
myStack.stackPop()
console.log("Inside my stack ",myStack.stackPeep());
