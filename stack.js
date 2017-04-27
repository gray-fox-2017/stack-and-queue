'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.stack=[]
    this.max = this.size()
  }

  size() {
    return 5;
  }


  stackPush(x) {
    if(this.isFull())
    {
      console.log('Stack Full!');
    }else{
      this.stack.push(x);
    }
  }

  stackPop() {
    if(this.isEmpty())
    {
      return "Stack Empty!";
    }
    else return this.stack.pop();
  }

  first() {
    console.log(this.stack[0]);
  }

  last() {
    console.log(this.stack[this.stack.length-1]);
  }

  isEmpty() {
    return (this.stack.length===0) ? true:false;
  }

  isFull() {
    return (this.stack.length===this.max) ? true:false;
  }

  stackPeep() {
    console.log(this.stack[this.stack.length-1]);
  }
}

let myStack = new Stack();

console.log(`The stack is empty? ${myStack.isEmpty()}`);

myStack.stackPush("JavaScript");
myStack.stackPush("is just so");
myStack.stackPush("cool");

myStack.stackPush(15);
myStack.stackPeep();

console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());

console.log(`The stack is empty? ${myStack.isEmpty()}`);
console.log(myStack)
console.log(myStack.stackPop());


module.exports = Stack
