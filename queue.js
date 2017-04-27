'use strict'

class Queue {
  constructor(max) {
    this.arr = [];
    this.MAX_SIZE = max;
  }

  size() {
    console.log(this.arr.length)
  }

  queuePush(x) {
    if(this.arr.length<this.MAX_SIZE){
      this.arr.push(x);
      console.log(`${x} is succesfully added`);
    } else {
      console.log('I\'m afraid you can\'t do that, the queue is full');
    }
  }

  queueRemove() {
    if(this.arr.length>0){
      this.arr.shift();
      console.log(`succesfully removed front queue`);
    } else {
      console.log('I\'m afraid you can\'t do that, the queue is already empty');
    }
  }

  first() {
  }

  last() {
  }

  isEmpty() {
    if(this.arr.length===0){
      console.log('Queue is empty');
    } else {
      console.log('Queue is not empty');
    }
  }

  isFull() {
    if(this.arr.length===this.MAX_SIZE){
      console.log('Queue is full');
    } else {
      console.log('Queue is not full');
    }
  }

  queuePeep() {
    console.log(this.arr[0])
  }
}

let myQueue = new Queue(3);
console.log(myQueue);
myQueue.isEmpty()
myQueue.isFull()
myQueue.queuePush('satu');
myQueue.queuePush('dua');
myQueue.queuePush('tiga');
myQueue.queuePush('empat');
myQueue.isEmpty()
myQueue.isFull()
myQueue.queuePeep()
myQueue.size()
console.log(myQueue);
myQueue.queueRemove();
console.log(myQueue);
myQueue.queueRemove();
myQueue.queueRemove();
myQueue.queueRemove();
myQueue.isEmpty()
myQueue.isFull()
console.log(myQueue);

module.exports = Queue
