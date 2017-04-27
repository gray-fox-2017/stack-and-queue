'use strict'

class Queue {
  constructor () {
    this.arra = [];
    this.max = 5;
  }

  size() {
    console.log(this.arra.length);
    return this.arra.length;
  }

  quePush(x) {
    if (this.isFull() === true){
      console.log(`Sudah Penuh`)
    } else {
      this.arra.push(x);
      console.log(`${x} is added`)
      console.log(this.arra);
    }
  }

  queRemove() {
    if (this.isEmpty() === true){
      console.log(`sudah kosong`)
    } else {
      this.arra.shift()
      console.log(`removed!`)
      console.log(this.arra)
    }
  }

  first() {
    if(this.isEmpty() == true){
      return []
    } else {
      return this.arra[0];
    }
  }

  last() {
    if(this.isFull() == true){
      return 'array full and the current array are : '+this.arra.length
    } else {
      return this.arra[5];
    }
  }

  isEmpty() {
    if(this.arra.length == 0 ) { return true; } else { return false; }
  }

  isFull() {
    if(this.arra.length >= this.max ) { return true; } else { return false; }
  }

  quePeep() {
    console.log(this.arra[this.arra.length - 1]);
    return this.arra[this.arra.length - 1];
  }
}

let que = new Queue();
console.log(`The que is empty? ${que.isEmpty()}`)
que.size();
console.log(que.first())
que.quePush('JavaScript')
que.quePush('is just so')
que.quePush('cool')
que.quePush(15)
que.quePush('Hacktiv8')
que.quePush('keluar')
console.log(que.last())
que.quePeep()
que.queRemove()
que.queRemove()
que.queRemove()
que.queRemove()
console.log(`The que is empty? ${que.isEmpty()}`)
console.log(que.queRemove())//ga tersedia
