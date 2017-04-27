'use strict'

class Queue {
  constructor (maxSize) {
    this.data = []
    this.MAX_SIZE = maxSize
  }

  queueInsert() {
    return this.data.push(4)
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
    return this.data[this.data.length -1]
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
