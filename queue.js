'use strict'

class Queue {
  constructor(MAX_SIZE = 5){
    this.max = MAX_SIZE
    this.queue = []
  }
  size() {
    return this.queue.length
  }

  queuePush(x) {
    if(this.size() < this.max){
      console.log(`${x} pushed!`)
      this.queue.push(x)
    }
    if (this.queue >= this.max) {
      console.log("Sorry uda full coy")
    }
  }

  queuePop() {
    if(this.size() > 0){
      return `${this.queue.pop()} Popped!`
    }
    else{
      console.log("queue kosong gak ada yang bisa di pop")
    }
  }

  last() {
    if(this.size() > 0){
      console.log(`Last adalah: ${this.queue[0]}`)
    }
    else {
      console.log ("queue kosong apa yang mau diliat?")
    }
  }

  first() {
    if (this.size() > 0){
     console.log(`First adalah:${this.queue[this.size()-1]}`)
    }
    else{
      console.log("queue kosong apa yang mau diliat?")
    }
  }

   isEmpty() {
    if (this.size() === 0){
      return true
    }
    else{
      return false
    }
  }

  isFull() {
    if(this.size() === this.max){
      return true
    }
    else {
      false
    }
  }

  queuePeep() {
    console.log(this.first())
  }
}

let myQueue = new Queue(15)
console.log(`The queue is empty? ${myQueue.isEmpty()}`)

console.log(myQueue.size())
myQueue.queuePush("Javascript")
console.log(myQueue.size())
myQueue.queuePush("is just so")
console.log(myQueue.size())
myQueue.queuePush("Cool")
console.log(myQueue.size())

myQueue.queuePush(15)

myQueue.queuePeep()

myQueue.last()

console.log(myQueue.queuePop())
console.log(myQueue.queuePop())
console.log(myQueue.queuePop())
console.log(myQueue.queuePop())

console.log(`The queue is empty? ${myQueue.isEmpty()}`)

console.log(myQueue.queuePop())

module.exports = Queue
