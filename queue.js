'use strict'

class Queue {
  constructor(max_size=15) {
    this.arr = [];
    this.maxSize = max_size;
  }

  size() {
    return `Max size ${this.maxSize}`;
  }

  queueInsert(x) {
    if (this.isFull()) {
        return "array penuh";
    } else {
      (this.arr).unshift(x);
    }
  }

  queuePop() {
    if (this.isEmpty()) {
      (this.arr).shift();
    } else {
      return "Array kosong";
    }
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
    if (this.arr.length > this.maxSize) {
      return true;
    } else {
      return false;
    }
  }

  stackPeep() {
    return this.arr[0];
  }
}
