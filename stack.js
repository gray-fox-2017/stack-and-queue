'use strict'

// Your code implementation
class Stack {
  constructor(MAX_SIZE, array = []) {
    this.MAX_SIZE = MAX_SIZE;
    this.array = array;
  }

  size() {
    return this.array.length;
  }

  stackPush(x) {
    if(this.size() < this.MAX_SIZE) {
      return this.array.push(x);
    } else {
      console.log('Stack Penuh');
      return this.array;
    }
  }

  stackPop() {
    if(this.isEmpty()) {
      console.log('Sudah Kosong')
    } else return this.array.pop();
  }

  first() {
    return this.array[0];
  }

  last() {
    return this.array[this.size() - 1]
  }

  isEmpty() {
    if(this.size() == 0) {
      return true;
    } else {
      return false;
    }
  }

  isFull() {
    if(this.size() == this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  }

  stackPeep() {
    console.log(this.array[this.size () - 1]);
  }
}

let myStack = new Stack(4);

console.log(`The stack is empty? ${myStack.isEmpty()}`)

console.log(myStack.size())
myStack.stackPush('JavaScript');
myStack.stackPush('is just so');
myStack.stackPush('cool');
myStack.stackPush('JavaScript');
myStack.stackPush('is just so');
myStack.stackPush('cool');

myStack.stackPeep();
//
myStack.stackPop();
myStack.stackPop();
myStack.stackPop();
myStack.stackPop();

console.log(`The stack is empty? ${myStack.isEmpty()}`)
myStack.stackPop()




module.exports = Stack
