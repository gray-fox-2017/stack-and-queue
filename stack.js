'use strict'

// Your code implementation
class Stack {
  constructor(maxSize) {
    this.arr = [];
    this.MAX_SIZE = maxSize;
  }

  size() {
    return this.arr.length;
  }

  stackPush(x) {
    this.arr.push(x);
  }

  stackPop() {
    this.arr.shift();
  }

  first() {
    return this.arr[0];
  }

  last() {
    return this.arr[this.arr.length-1];
  }

  isEmpty() {
    if (this.arr.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  isFull() {
    if (size() == this.maxSize) {

    }
  }

  stackPeek() {
    return first();
  }
}

let myStack = new Stack()


module.exports = Stack
