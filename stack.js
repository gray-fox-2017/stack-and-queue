'use strict'

// Your code implementation
class Stack {
  constructor(maxSize) {
    this.MAX_SIZE = maxSize
    this.data = []
  }

  size() {
    return this.data.length
  }

  stackPush(isi) {
    return this.data.push(isi)
  }

  stackPop() {
    return this.data.pop()
  }

  first() {
    return this.data[0]
  }

  last() {
    return this.data[this.data.length -1]
  }

  isEmpty() {
    return this.data.length === 0? true : false
  }

  isFull() {
    return this.data.length === 15? true : false
  }

  stackPeep() {
    return this.first()
  }
}


module.exports = Stack
