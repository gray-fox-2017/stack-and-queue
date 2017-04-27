'use strict'

// Your code implementation
class Stack {
  constructor(Max) {
    this.Max = Max;
    this.Data = [];

  }

  size() {
    return this.Data.length;
  }

  showData(){
    return this.Data;
  }

  stackPush(x) {
    if(this.isFull()){
      console.log(`Maaf Tidak dapat menambahkan Data, Karena Data sudah full !`)
    }
    else{
      this.Data.unshift(x);
    }
  }

  stackPop() {
    if(this.isEmpty()){
      return "Maaf, Tidak bisa Menghapus data karena datanya kosong";
    }
    else{
      this.Data.shift();
      return this.showData();
    }

  }

  first() {
    if(this.isEmpty()){
      return "Maaf, Untuk Pencarian First tidak bisa karena Datanya Kosong";
    }
    else{
      return this.Data[0];
    }
  }

  last() {
      if(this.isEmpty()){
          return "Maaf, Untuk Pencarian First tidak bisa karena Datanya Kosong";
      }
      else{
          return this.Data[this.size()-1];
      }
  }

  isEmpty() {
      if(this.size()== 0 ){
        return true;
      }
      else{
        return false;
      }
  }

  isFull() {
    if(this.Max >= this.size()){
      return false;
    }
    else{
      return true;
    }
  }

  queuePush() {
    if(this.isEmpty()){
      console.log(`Maaf untuk data tidak ada isi !`);
    }
    else{
      console.log(`Data Yang Pertama adalah ${this.first()}`);
    }
  }
}



//Buat Stack baru
let myStack = new Stack(10);
console.log(myStack.isFull());

//cek apakah stack sudah ada isi atau kosong?
console.log(`The stack is empty? ${myStack.isEmpty()}`)//true
// true jika jika stack kosong
// false jika jika stack memiliki suatu nilai atau lebih

//Tambahkan Tiga
myStack.stackPush("JavaScript");
myStack.stackPush("is just so");
myStack.stackPush("cool");

//Karena stack menggunakan array;
//kita bsa add tipe data apapun seperti string dan interger
myStack.stackPush(15);


//Lihat data paling atas
myStack.stackPush(); //15

//Lihat, Kita menghapus data satu per satu
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());

// cek lagi apakah stack-nya beneran kosong?
console.log(`The stack is empty ? ${myStack.isEmpty()}`)//false

//Coba hapus stack kosong, apa yang terjadi ?
console.log(myStack.stackPop());

module.exports = Stack
