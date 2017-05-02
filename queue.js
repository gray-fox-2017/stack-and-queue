'use strict'

class Queue {
  constructor(maxSize) {
    this.name = [];
    this.MAX_SIZE = maxSize;
  }

  size() {
    return this.name.length;
  }

  queuePush(x) {
    return this.name.push(x);
  }

  queuePop() {
    return this.name.shift();
  }

  first() {
    return this.name[0];
  }

  last() {
  return this.name[this.name.length-1];
  }

  isEmpty() {
    return this.name.length == 0;
    // if(this.name.length == 0){
    //   return true;
    // }else{return false}
  }

  isFull() {
    return this.name.length == this.MAX_SIZE;
    // if(this.name.length == this.MAX_SIZE){
    //   return true;
    // }else{return false}
  }

  stackPeep() {
    return this.first();
  }
}
