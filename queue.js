'use strict'

class Queue {
  constructor (maxSize) {
    this.data = []
    this.MAX_SIZE = maxSize
  }

  queueInsert(isi) {
    return this.data.push(isi)
  }

  queueRemove() {
    return this.data.shift()
  }
  size() {
    return this.data.length
  }

  first() {
    return this.data[0]
  }

  queueLast() {
    return this.data[this.data.length]
  }

  isEmpty() {
    return this.data.length === 0? true : false
  }

  isFull() {
    return this.data.length === 15? true : false
  }

  queueTop() {
    return this.first()
  }



}
let q = new Queue()
console.log(q.queueInsert("javaScript"));
console.log(q.queueRemove());
console.log(q.isFull());
console.log(q.isEmpty());
