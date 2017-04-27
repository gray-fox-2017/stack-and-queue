'use strict'

class Queue {
  constructor (Max) {
    this.Max = Max;
    this.Data = [];
  }

    size() {
        return this.Data.length;
    }

    showData(){
        return this.Data;
    }

    queuePush(x) {
        if(this.isFull()){
            console.log(`Maaf Tidak dapat menambahkan Data, Karena Data sudah full !`)
        }
        else{
            this.Data.push(x);
        }
    }

    queuePop() {
        if(this.isEmpty()){
            return "Maaf, Tidak bisa Menghapus data karena datanya kosong";
        }
        else{
            (this.Data).shift();
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

    queuePeep() {
        if(this.isEmpty()){
            console.log(`Maaf untuk data tidak ada isi !`);
        }
        else{
            console.log(`Data Yang Pertama adalah ${this.first()}`);
        }
    }
}


//Buat Stack baru
let myQueue = new Queue(10);
console.log(myQueue.isFull());

//cek apakah stack sudah ada isi atau kosong?
console.log(`The stack is empty? ${myQueue.isEmpty()}`)//true
// true jika jika stack kosong
// false jika jika stack memiliki suatu nilai atau lebih

//Tambahkan Tiga
myQueue.queuePush("JavaScript");
myQueue.queuePush("is just so");
myQueue.queuePush("cool");

//Karena stack menggunakan array;
//kita bsa add tipe data apapun seperti string dan interger
myQueue.queuePush(15);


//Lihat data paling atas
myQueue.first(); //15

//Lihat, Kita menghapus data satu per satu
console.log(myQueue.queuePop());
console.log(myQueue.queuePop());
console.log(myQueue.queuePop());
console.log(myQueue.queuePop());

// cek lagi apakah stack-nya beneran kosong?
console.log(`The stack is empty ? ${myQueue.isEmpty()}`)//false

//Coba hapus stack kosong, apa yang terjadi ?
console.log(myQueue.queuePop());
