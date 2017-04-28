'use strict'

class Queue {
  constructor () {
    this.queue = [];
    this.maxsize = 3;
  }
  size() {
  // console.log(this.queue.length);
  return this.queue.length
  }

  queuePush(x) {
    this.queue.push(x);
  }

  queueShift() {
    this.queue.shift();
  }

  first() {
    console.log(this.queue[0]);
  }

  last() {
    console.log(this.queue[this.size() - 1]);
  }

  isEmpty() {
    if (this.size() !== 0){
      console.log("queue is not empty");
      // return false
    } else {
      console.log("queue is empty");
      // return true
    }
  }

  isFull() {
    if (this.size() == this.maxsize){
      return true
      console.log("true")
    } else {
      console.log("false")
      return false
    }
  }

  queuePeep() {
  }

}

let myqueue = new Queue();
myqueue.isEmpty();
myqueue.queuePush('JavaScript');
myqueue.queuePush('is just so');
myqueue.queuePush('cool');
console.log(myqueue.size());
myqueue.queuePush(15);
myqueue.last();
myqueue.queueShift();
myqueue.queueShift();
myqueue.queueShift();
myqueue.queueShift();
myqueue.isEmpty();
