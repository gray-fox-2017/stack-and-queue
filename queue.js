'use strict'

class Queue {
  constructor(max_size) {
    this.arr = [];
    this.maxSize = max_size;
  }

  size() {
    return `Max size ${this.maxSize}`;
  }

  queueInsert(x) {
    if (this.isFull()) {
        return false;
    } else {
      (this.arr).push(x);
    }
  }

  queuePop() {
    if (!this.isEmpty()) {
      (this.arr).shift();
    } else {
      return false;
    }
  }

  first() {
    return this.arr[0];
  }

  last() {
    return this.arr[this.arr.length - 1];
  }

  isEmpty() {
    if (this.arr[0] == undefined) {
      return true;
    } else {
      return false;
    }
  }

  isFull() {
    if (this.arr.length == this.maxSize) {
      return true;
    } else {
      return false;
    }
  }

  queuePeep() {
    return this.arr;
  }
}


let myQueue = new Queue(4);

myQueue.queueInsert('J');
myQueue.queueInsert('A');
myQueue.queueInsert('K');

console.log(myQueue.arr)

myQueue.queueInsert('A');

console.log(myQueue.first());

console.log(myQueue.isEmpty());
console.log(myQueue.size());
myQueue.queueInsert('R');
console.log(myQueue.isFull());
console.log(myQueue.queuePeep());
myQueue.queuePop();
console.log(myQueue.queuePeep());
