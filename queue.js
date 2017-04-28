'use strict'

class Queue {
  constructor (maxSize) {
    this.arr = [];
    this.MAX_SIZE = maxSize;
  }

  size() {
    return this.arr.length;
  }

  queueInsert(x) {
    this.arr.push(x);
  }

  queueRemove() {
    this.arr.shift();
  }

  first() {
    return this.arr[0];
  }

  last() {
    return this.arr[this.arr.length-1];
  }

  isEmpty() {
    if (this.arr == []) {
      return true;
    } else {
      return false;
    }
  }

  isFull() {
    if (size() == this.maxSize) {
      
    }
  }

  queuePeek() {
    return first();
  }
}
