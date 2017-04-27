'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.data = [];
    this.maxsize = 6;
  }

  size() {
    return this.maxsize.length;
  }

  stackPush(x) {
    if (this.data.length === this.maxsize) {
      return console.log(`Data Stack Penuh, Stack Maximal ${this.maxsize}`);
    } else {
      this.data.push(x);
      return console.log(`Data Berhasil ditambahkan ${x}`);
    }
  }

  stackPop() {
    if (this.data.length === 0) {
      return console.log(`Data Stack Kosong`);
    } else {
      return console.log(`Berhasil menghapus Data ${this.data.pop()}`);
    }
  }

  first() {
    console.log(this.data[this.data.length - 1]);
  }

  last() {
    if (this.data[0] === null) {
      return console.log(`Data Stack Kosong`);
    } else {
      return console.log(this.data[0]);
    }
  }

  isEmpty() {
    if(this.data.length === 0) {
      return console.log(`Data dalam Stack Kosong`);
    } else {
      return console.log(`Belum Kosong Data dalam Stack = ${this.data.length}`);
    }
  }

  isFull() {
    if(this.data.length === this.maxsize) {
      return console.log(`Stack Penuh`);
    } else {
      return console.log(`Belum Penuh, Stack berisi Data ${this.data.length}`);
    }
  }

  stackPeep() {
    return this.data[this.data.lenth - 1];
  }
}

let mobil = new Stack;
mobil.isEmpty();
mobil.stackPush('Fortuner');
console.log(mobil.data);
mobil.stackPush('Lamborgini');
console.log(mobil.data);
mobil.stackPush('Ferary');
console.log(mobil.data);

mobil.isEmpty();
mobil.stackPush('Lexus');
console.log(mobil.data);
mobil.stackPush('Jazz');
console.log(mobil.data);
mobil.stackPush('Avanza');
console.log(mobil.data);
mobil.stackPush('xenia');
console.log(mobil.data);
mobil.stackPush('Luxio');
console.log(mobil.data);

mobil.isFull();
mobil.stackPop();
console.log(mobil.data);

module.exports = Stack
