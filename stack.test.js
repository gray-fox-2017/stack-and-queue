const assert = require('assert')

const Stack = require('./stack.js')

describe('Test Stack Challenge', () => {
  describe('Test Release 1', () => {
    const myStack = new Stack()
    it('Check if the new stack is an object', () => {
      assert.deepEqual(typeof myStack, 'object')
    })
    it('check if empty', () => {
      assert.deepEqual(myStack.isEmpty(), true)
    })
    it('adds 3 elements', () => {
      myStack.stackPush('JavaScript')
      myStack.stackPush('is just so')
      myStack.stackPush('cool')

      assert.deepEqual(myStack.size(), 3)
    })
    it('add new element', () => {
      myStack.stackPush(15)

      assert.deepEqual(myStack.last(), 15)
    })
    it('remove all elements', () => {
      myStack.stackPop()
      myStack.stackPop()
      myStack.stackPop()
      myStack.stackPop()

      assert.deepEqual(myStack.isEmpty(), true)
    })
  })
})
