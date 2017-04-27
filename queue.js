'use strict'

class Queue {
  constructor () {
    this.data = [];
    this.maxsize = 6;
  }

  size (){
    return this.data.length;
  }

  QueuePush(x) {
    if (this.isFull()) {
      return console.log(`Data Queue Full, Data Maximal ${this.maxsize}`);
    } else {
      this.data.push(x)
      return console.log(`Data berhasil ditambahkan ${x}`);
    }
  }

  QueueShift() {
    if (this.isEmpty()) {
      return console.log(`Data di Queue Kosong`);
    } else {
      return this.data.shift();
      // return console.log(`Data berhasil di hapus ${this.data.shift()}`);
    }
  }

  QueueFirst() {
      if (this.data[0] === null) {
        return console.log(`Data dalam Queue Kosong`);
      } else {
        return console.log(this.data[0]);
      }
  }

  QueueLast() {
      return console.log(this.data[this.data.length - 1]);
  }

  isEmpty() {
      if (this.data.length == 0) {
        return console.log(`Data dalam Queue Kosong`);
      }
  }

  isFull() {
      return this.size() == this.maxsize;
  }

  QueuePeep() {
      return this.QueueLast();
  }

}

let QueueNew = new Queue();
console.log(`The Queue Kosong? ${QueueNew.isEmpty()}`);
QueueNew.QueuePush("I Love");
QueueNew.QueuePush("Javascript");
QueueNew.QueuePush("is very powerfull");
QueueNew.QueuePush("man");
console.log(QueueNew.data);
QueueNew.QueuePeep();
console.log(QueueNew.QueueShift());
console.log(QueueNew.QueueShift());
console.log(QueueNew.QueueShift());
console.log(QueueNew.QueueShift());
console.log(`The Queue is empty? ${QueueNew.isEmpty()}`);
console.log(QueueNew.QueueShift());
console.log(QueueNew.data);

module.exports = Queue
