'use strict'

// Your code implementation
class Stack {
  constructor(max_size=15) {
    this.arr = [];
    this.maxSize = max_size;
  }

  size() {
    return `Max size ${this.size}`;
  }

  stackPush(x) {
    if (this.arr.length > this.maxSize) {
        return "array penuh";
    } else {
      (this.arr).push(x);
    }
  }

  stackPop() {
    (this.arr).pop();
  }

  first() {
    return this.arr[0];
  }

  last() {
    return this.arr[this.arr.length - 1];
  }

  isEmpty() {
    if (!this.isFull()) {
      return true;
    } else {
      return false;
    }
  }

  isFull() {
    if (this.arr == []) {
      return false;
    } else {
      return true;
    }
  }

  stackPeep() {
    return this.arr[0];
  }
}

// module.exports = Stack
//
let myStack = new Stack();
myStack.stackPush("x");
myStack.stackPush("cc");
console.log(myStack);

console.log(myStack.stackPeep());
console.log(myStack);
console.log(myStack.isEmpty());
console.log(myStack.isFull());
console.log(myStack.last());
console.log(myStack.arr[0]);
console.log(myStack.maxSize);

// console.log(`The Stack is empty? ${stack.isEmpty()}`); // true jika kosong
//
// myStack.stackPush("Javascript");
// myStack.stackPush("is just so");
//
// myStack.stackPush(15);
// myStack.stackPeep();
//
// console.log(`The stack is empty? ${myStack.isEmpty()}`);
// console.log(myStack.stackPop());
