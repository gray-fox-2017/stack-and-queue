'use strict'

class Queue {
  constructor(max_size=10) {
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
      (this.arr).push(x);
    }
  }

  queuePop() {
    if (!this.isEmpty()) {
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
    if (this.arr == []) {
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
    return this.arr[0];
  }
}

let queueStack = new Queue();
queueStack.queueInsert("fajar");
queueStack.queueInsert(123123);
// queueStack.queueInsert(123123);
// console.log(queueStack.queuePop());
queueStack.queuePop();

console.log("apa penuh ? ", queueStack.isFull());
console.log(queueStack);
console.log(queueStack.size());
