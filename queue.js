'use strict'

class Queue {
  constructor() {
    this.queue=[]
  }

  insert(input){
    this.queue.push(input);
  }

  remove(){
    if(this.isEmpty())
    return "Queue Empty!"
    else return this.queue.shift();
  }

  isEmpty(){
    return (this.queue.length===0) ? true:false;
  }

  showFirst(){
    return this.queue[0];
  }
  showLast(){
    return this.queue[this.queue.length-1];
  }

}


var antrian = new Queue()

antrian.insert('penonton 1');
antrian.insert('penonton 2');
antrian.insert('penonton 3');
antrian.insert('penonton 4');
antrian.insert('penonton 5');
antrian.insert('penonton 6');
console.log(antrian.remove());
console.log(antrian.remove());
console.log(antrian.showFirst());
console.log(antrian.showLast());
console.log(antrian.queue);
