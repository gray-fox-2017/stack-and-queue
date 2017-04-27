'use strict'

class Queue {
  constructor () {
    this.arr = [];
    this.max = 10;
  }

  queueInsert(x) {
    (this.arr).splice(0,0,x);
  }

  queueRemove() {
    (this.arr).pop();
  }

  isEmpty() {
    if ((this.arr).length > 0) {
      return 'The Queue is not empty';
    } else {
      return 'The Queue is empty';
    }
  }

  isFull() {
    if ((this.arr).length < this.max) {
      return `Santai, saat ini Queue masih belum penuh`
    } else {
      return `Uh-oh, saat ini queue sudah penuh`
    }
  }

  sizeStat() {
    return `Saat ini jumlah data di Queue ada ${(this.arr).length} data`
  }

  showData() {
    return `Berikut seluruh Queue saat ini: ${(this.arr).join(' ')}`
  }

  showPeak() {
    return `Data yang paling depan adalah: ${(this.arr)[((this.arr).length)-1]}`
  }

  showBottom() {
    return `Data yang paling belakang adalah: ${(this.arr)[0]}`
  }
}

var queue = new Queue();

queue.queueInsert('Javascript');
queue.queueInsert('is so');
queue.queueInsert('Awesome');
console.log(queue.showData());
console.log(queue.isEmpty());
console.log(queue.isFull());
queue.queueInsert('JaascipY');
queue.queueInsert('iskso');
queue.queueInsert('Aeesome');
queue.queueInsert('Jaaript');
queue.queueInsert('ishso');
queue.queueInsert('Aesoe');
console.log(queue.showPeak());
console.log(queue.showBottom());
console.log(queue.sizeStat());
