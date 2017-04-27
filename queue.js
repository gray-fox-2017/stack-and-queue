'use strict'

class Queue {
  constructor(maxSize=15) {
    this.arr = []
    this.maxSize = maxSize
  }

  size() {
    return `Size queue adalah ${this.arr.length}`
  }

  queueInsert(x) {
    if (this.arr.length<=this.maxSize){
      this.arr.push(x);
      return this.arr
    }
    return 'Data sudah penuh'
  }

  queueRemove() {
    this.arr.shift();
    return `Data anda saat ini adalah ${this.arr}`
  }

  first() {
    return `Data pertama anda adalah ${this.arr[0]}`
  }

  last() {
    return `Data terakhir anda adalah ${this.arr[this.arr.length-1]}`
  }

  isEmpty() {
    if(this.arr.length === 0){
      return true
    } else {
      return false
    }
  }

  isFull() {
    if(this.arr.length == maxSize){
      return true
    } else {
      return false
    }
  }

  queuePeek() {
    return `Data terakhir anda adalah ${this.arr[this.arr.length-1]}`
  }
}

let myQueue = new Queue();

console.log(`The queue is empty? ${myQueue.isEmpty()}`)

myQueue.queueInsert('JavaScript')
myQueue.queueInsert('is just so')
myQueue.queueInsert('cool')

myQueue.queueInsert(15)
myQueue.queueInsert(30)
console.log(myQueue.arr)

myQueue.queuePeek()

console.log(myQueue.first())
console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())
console.log(myQueue.size())
console.log(myQueue.last())

console.log(`The queue is empty? ${myQueue.isEmpty()}`)

console.log(myQueue.queueRemove())

module.exports = Queue
