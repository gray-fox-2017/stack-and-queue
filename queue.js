'use strict'

class Queue {
  constructor(MAX_SIZE, array = []) {
    this.MAX_SIZE = MAX_SIZE;
    this.array = array;
  }

  size() {
    return this.array.length;
  }

  queueInsert(x) {
    if(this.size() < this.MAX_SIZE) {
      return this.array.push(x);
    } else {
      console.log('Stack Penuh');
      return this.array;
    }
  }

  queueRemove() {
    return this.array.shift();
  }

  first() {
    return this.array[ 0 ];
  }

  last() {
    return this.array[ this.size() - 1 ]
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

  queuePeep() {
    console.log(this.array[this.size () - 1]);
  }
}

let myQueue = new Queue(4);

myQueue.queueInsert('J');
myQueue.queueInsert('A');
myQueue.queueInsert('K');

console.log(myQueue.array)

myQueue.queueInsert('A');

myQueue.queueRemove();

console.log(myQueue.first());

console.log(myQueue.isEmpty());
console.log(myQueue.size());
myQueue.queueInsert('R');
console.log(myQueue.isFull());
