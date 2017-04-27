'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.arr = [];
    this.max = 10;
  }

  size() {
    return 'Saat ini Stack telah terisi sejumlah ' + (this.arr).length + ' data.'
  }

  stackPush(x) {
    if ((this.arr).length < this.max) {
      (this.arr).push(x);
      return 'Data ' + x + ' telah berhasil di tambahkan!'
    } else {
      return 'Maaf saat ini stack sudah mencapai kapasitas penuh,\nmohon hapus data-data yang tidak terpakai terlebih dahulu'
    }

  }

  stackPop() {
    (this.arr).pop();
    return 'Data teratas telah berhasil di hapus!'
  }

  first() {
    return `Data pertama adalah: ${(this.arr)[0]}`
  }

  last() {
    return `Data terakhir adalah: ${(this.arr)[((this.arr).length)-1]}`
  }

  isEmpty() {
    if ((this.arr).length > 0) {
      return 'The Stack is not empty';
    } else {
      return 'The Stack is empty';
    }
  }

  isFull() {
    if ((this.arr).length < this.max ) {
      return 'Stack masih belum penuh!'
    } else {
      return 'Stack sudah penuh!'
    }

  }

  stackPeep() {
    return 'Data teratas adalah: ' + (this.arr)[((this.arr).length)-1]
  }
  pengakhir() {
   return `Berikut seluruh isi data Stack saat ini: ` + `${(this.arr).join(' ')}`
  }
}

let myStack = new Stack();

console.log(`The stack is empty? ${myStack.isEmpty()}`);
myStack.stackPush('JavaScript');
myStack.stackPush('is just so');
myStack.stackPush('kull!!');
console.log(myStack.pengakhir());
console.log(myStack.stackPush(15));
console.log(myStack.pengakhir());
console.log(myStack.first());
console.log(myStack.last());
console.log(myStack);


module.exports = Stack
