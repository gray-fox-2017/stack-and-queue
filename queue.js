'use strict'

// Your code implementation
//LIFO
class Queue {
  constructor(max) {
    this.MAX_SIZE = max;
    this.data = [];
  }

  size() {
    return this.data.length;
  }
  //show all data
  QueueShow() {
    return this.data;
  }
  //add data
  QueuePush(x) {
   if (!this.isFull()) this.data.push(x);
   else console.log(`Tidak dapat menambahkan data '${x}'karena penuh`);

  }
  //hapus data pertama
  QueuePop() {
    if (this.isEmpty()) {
      return `Tidak dapat menghapus data karena kosong`;
    }else {
      this.data.shift();
      return this.QueueShow();
    }
  }
  //balikin paling atas aka yg terakhir dibalikin
  QueuePeek() {
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
    return (this.size() >= this.MAX_SIZE);
  }

}

let myQueue = new Queue(4);
console.log(`The Queue is empty?  ${myQueue.isEmpty()}`);//true

myQueue.QueuePush('Javascript');
myQueue.QueuePush('is just so');
myQueue.QueuePush('cool');

//karena bukan arr jadi bisa masukan tipe data apapun
myQueue.QueuePush(15);
//paling atas
myQueue.QueuePeek();//15


//akses
// console.log(myQueue[3]);

//hapus 1..1
console.log(myQueue.QueuePop());
console.log(myQueue.QueuePop());
console.log(myQueue.QueuePop());
console.log(myQueue.QueuePop());

//apakah beneran kosong?
console.log(`The Queue is empty?  ${myQueue.isEmpty()}`);//false

//coba hapus kosong apa yg terjadi
console.log(myQueue.QueuePop());



// module.exports = Queue
