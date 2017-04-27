'use strict'

class Queue {
  constructor (max = 1000) {
    this.queue = [];
    this.max = max;
  }
  
  size() {
    return this.queue.length;
  }

  queuePush(x) {
    console.log (this.queue.length);
    if (this.queue.length>=this.max) {
      console.log ("Your queue is full. Sorry. Life is cruel.")
    }
    else {return this.queue.push(x);}
  }

  queuePop() {
    return this.queue.shift();
  }

  first() {
    return this.queue[0];
  }

  last() {
    return this.queue[this.queue.length-1];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  isFull() {
    return this.queue.length === this.max;
  }

  queuePeek() {
    return this.queue[0];
  }
}

module.exports = Queue

let myQueue = new Queue();

// Check if empty
console.log("Check if empty: " + myQueue.isEmpty());

// Add new element
myQueue.queuePush('JavaScript');
myQueue.queuePush('is just so');
myQueue.queuePush('cool');

//Add any type of element
myQueue.queuePush(15);

// Check the uppermost data
console.log("I\'m peeking! The uppermost data is: ", myQueue.queuePeek());

// Delete an element
myQueue.queuePop();
console.log("I\'m peeking again. This time after popping the queue: ",
myQueue.queuePeek());

// Check first and last element
console.log("The uppermost element: ", myQueue.first());
console.log("The lowermost element: ", myQueue.last());

console.log("Check if full: " + myQueue.isFull());
console.log(myQueue);

