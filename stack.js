'use strict'

// Your code implementation
//LIFO
class Stack {
  constructor(max) {
    this.MAX_SIZE = max;
    this.data = [];
  }

  size() {
    return this.data.length;
  }
  //show all data
  stackShow() {
    return this.data;
  }
  //add data
  stackPush(x) {
   if (!this.isFull()) this.data.unshift(x);
   else console.log(`Tidak dapat menambahkan data '${x}'karena penuh`);

  }
  //hapus data terakhir
  stackPop() {
    if (this.isEmpty()) {
      return `Tidak dapat menghapus data karena kosong`;
    }else {
      this.data.shift();
      return this.stackShow();
    }
  }
  //balikin paling atas aka yg terakhir dibalikin
  stackPeek() {
    console.log( this.isEmpty() ? 'Tidak ada data':  'Tumpukan teratas : '+this.first() );
  }
  //paling awal dimasukin
  first() {
    return (!this.isEmpty() ? 'Data pertama yang dimasukan adalah : '+this.data[0] : 'Tidak ada data');
  }

  last() {
    return ( !this.isEmpty() ? 'Data terakhir yang dimasukan adalah : '+this.data[this.size()-1] : 'Tidak ada data');
  }

  isEmpty() {
    return (this.size() === 0);
  }
  //penuh lsg tolak
  isFull() {
    return (this.size() > this.MAX_SIZE);
  }

}

let myStack = new Stack(4);
console.log(`The stack is empty?  ${myStack.isEmpty()}`);//true

myStack.stackPush('Javascript');
myStack.stackPush('is just so');
myStack.stackPush('cool');
myStack.stackPush('loh');
//karena bukan arr jadi bisa masukan tipe data apapun
myStack.stackPush(15);
//paling atas
myStack.stackPeek();//15


//akses
// console.log(myStack[3]);

//hapus 1..1
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());

//apakah beneran kosong?
console.log(`The stack is empty?  ${myStack.isEmpty()}`);//false

//coba hapus kosong apa yg terjadi
console.log(myStack.stackPop());



// module.exports = Stack
