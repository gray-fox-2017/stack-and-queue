'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.str = [];
    this.max = 10;
  }

  size() {
    return 'Saat ini Stack telah terisi sejumlah ' + (this.str).length + ' data.'
  }

  stackPush(x) {
    if ((this.str).length < this.max) {
      (this.str).push(x);
      return 'Data ' + x + ' telah berhasil di tambahkan!'
    } else {
      return 'Maaf saat ini stack sudah mencapai kapasitas penuh,\nmohon hapus data-data yang tidak terpakai terlebih dahulu'
    }

  }

  stackPop() {
    (this.str).pop();
    return 'Data teratas telah berhasil di hapus!'
  }

  first() {
    return `Data pertama adalah: ${(this.str)[0]}`
  }

  last() {
    return `Data terakhir adalah: ${(this.str)[((this.str).length)-1]}`
  }

  isEmpty() {
    if ((this.str).length > 0) {
      return 'The Stack is not empty';
    } else {
      return 'The Stack is empty';
    }
  }

  isFull() {
    if ((this.str).length < this.max ) {
      return 'Stack masih belum penuh!'
    } else {
      return 'Stack sudah penuh!'
    }

  }

  stackPeep() {
    return 'Data teratas adalah: ' + (this.str)[((this.str).length)-1]
  }
  pengakhir() {
   return `Berikut seluruh isi data Stack saat ini: ` + `${(this.str).join(' ')}`
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


module.exports = Stack
