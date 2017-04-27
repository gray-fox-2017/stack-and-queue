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
      return "array penuh";
    } else {
      (this.arr).push(x);
    }
  }

  stackPop() {
    if (this.isEmpty()) {
      return "array kosong";
    } else {
      (this.arr).pop();
    }

  }

  first() {
    return this.arr[0];
  }

  last() {
    return this.arr[this.arr.length - 1];
  }

  isEmpty() {
    if (this.arr == []) {
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
console.log("is it empty ? ", myStack.isEmpty());
console.log("is it full ?", myStack.isFull());
console.log("isi ", myStack.stackPush("fajar"));
console.log("isi", myStack.stackPush("abdul"));
console.log("isi", myStack.stackPush("karim"));
console.log(myStack.arr[0]);
console.log("kosong", myStack.stackPop());
console.log(myStack);

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
