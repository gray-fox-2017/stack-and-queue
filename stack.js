'use strict'

// Your code implementation
class Stack {
  constructor(maxSize) {
    this.name = [];
    this.MAX_SIZE = maxSize;
  }

  size() {
    return this.name.length;
  }

  stackPush(x) {
    return this.name.push(x);
  }

  stackPop() {
    return this.name.pop();
  }

  first() {
    return this.name[0];
  }

  last() {
  return this.name[this.name.length-1];
  }

  isEmpty() {
    if(this.name.length == 0){
      return true;
    }else{return false}
  }

  isFull() {
    if(this.name.length == this.MAX_SIZE){
      return true;
    }else{return false}
  }

  stackPeep() {
    return this.first();
  }
}

module.exports = Stack
