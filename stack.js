'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.array = [];
    this.max = 5;
  }

  size() {
    return this.max;
  }

  stackPush(x) {
    if (this.array.length <= this.max){
      this.array.push(x);
      console.log(`value : ${x} added to the stack || now value arrays : ${this.array}`)
    } else {
      console.log(`alert !!! stack maximum length ${this.max}`)
    }
    return this.array;
  }

  stackPop() {
    if (this.array.length !== 0){
      let pop = this.array.pop();
      console.log(`value : ${pop} is pop from stack || now value array : ${this.array}`);
    } else {
      console.log(`there is no value on the stack`);
    }
    return this.array;
  }

  first() {
    if (this.array[0] === undefined){
      console.log(`there's no value on the first array`);
    } else {
      console.log(`first value of stack is : ${this.array[0]}`);
    }
  }

  last() {
    if (this.array[this.array.length - 1] === undefined){
      console.log(`there's no value on the last array`);
    } else {
      console.log(`last value of stack is : ${this.array[this.array.length - 1]}`);
    }
  }

  isEmpty() {
    if (this.array.length === 0){
      console.log(true)
    } else {
      console.log(false)
    }
  }

  isFull() {
    if(this.array.length === this.max){
      console.log(true)
    } else {
      console.log(false)
    }
  }

  stackPeep() {
    if (this.array[this.array.length - 1] === undefined){
      console.log(`there's no value on the last array`);
    } else {
    console.log(`last value of stack is : ${this.array[this.array.length - 1]}`);
    }
  }
}


let stack = new Stack();
stack.size();
stack.stackPush("me");
stack.stackPush("is");
stack.stackPush("the");
stack.stackPush("best");
stack.stackPush("thing");
stack.stackPush("for");
stack.stackPush("you");
stack.stackPop();
stack.stackPop();
stack.stackPop();
stack.stackPop();
stack.stackPop();
stack.stackPop();
stack.first();
stack.last();
stack.isEmpty();
stack.isFull();
stack.stackPeep();


module.exports = Stack
