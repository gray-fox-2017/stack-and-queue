'use strict'

class Queue {
  constructor() {
    this.array = [];
    this.max = 5;
  }

  size() {
    return this.max;
  }

  queuePush(x) {
    if (this.array.length <= this.max){
      this.array.push(x);
      console.log(`value : ${x} added to the queue || now value arrays : ${this.array}`)
    } else {
      console.log(`alert !!! queue maximum length ${this.max}`)
    }
    return this.array;
  }

  queueShift() {
    if (this.array.length !== 0){
      let shift = this.array.shift();
      console.log(`value : ${shift} is shift from queue || now value array : ${this.array}`);
    } else {
      console.log(`there is no value on the queue`);
    }
    return this.array;
  }

  first() {
    if (this.array[0] === undefined){
      console.log(`there's no value on the first array`);
    } else {
      console.log(`first value of queue is : ${this.array[0]}`);
    }
  }

  last() {
    if (this.array[this.array.length - 1] === undefined){
      console.log(`there's no value on the last array`);
    } else {
      console.log(`last value of queue is : ${this.array[this.array.length - 1]}`);
    }
  }

  isEmpty() {
    if (this.array.length === 0){
      console.log(true)
    } else {
      console.log(false)
    }
  }

  isFull() {
    if(this.array.length === this.max){
      console.log(true)
    } else {
      console.log(false)
    }
  }

  queuePeep() {
    if (this.array[this.array.length - 1] === undefined){
      console.log(`there's no value on the last array`);
    } else {
    console.log(`last value of queue is : ${this.array[this.array.length - 1]}`);
    }
  }
}


let queue = new Queue();
queue.size();
queue.queuePush("me");
queue.queuePush("is");
queue.queuePush("the");
queue.queuePush("best");
queue.queuePush("thing");
queue.queuePush("for");
queue.queuePush("you");
queue.queueShift();
queue.queueShift();
queue.queueShift();
queue.queueShift();
queue.queueShift();
queue.queueShift();
queue.first();
queue.last();
queue.isEmpty();
queue.isFull();
queue.queuePeep();
