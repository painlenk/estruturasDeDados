class Queue {
  constructor(queue) {
    this.queue = queue;
  }

  push(value) {
    // adiciona do começo da fila
    this.queue.push(value);
  }

  shift() {
    // remove no começo da fila
    this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  isEmpity() {
    return Boolean(this.queue.length === 0);
  }

  clear() {
    this.queue = [];
  }

  print() {
    console.log(this.queue);
  }
}

const fila = new Queue([1, 2, 3, 4]);
/* fila.print();
fila.push(10);
fila.print();
fila.shift();
fila.print();
console.log(fila.peek());
console.log(fila.isEmpity());
fila.clear();
fila.print();
fila.unshift(50);
fila.print();
 */

//fila com prioridade

function PriorityQueue() {
  let items = []; // inicia  a fila vazia

  function QueueElement(element, priority) {
    // cria uma factory que devolve uma instancia de obj com element e preority
    return {
      element,
      priority,
    };
  }

  this.enQueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority); // instancia a factory
    let added = false; // função que controla se foi adicionado ou nao

    for (let i = 0; i < items.length; i++) {
      //[]
      if (queueElement.priority < items[i].priority) {
        //priority 2 e maior que o item priority ? 1 sim
        items.splice(i, 0, queueElement); // altera o array no indice e insere a queue na posição
        added = true; // muda a controladora para true
        break; // sai do laço
      }
    }

    if (!added) {
      // se added foi false ele altomaticamente insere oelement  na ultima posição da fila
      items.push(queueElement);
    }
  };

  this.deQueue = function () {
    return items.shift(); // remove o elemento na primeira posição
  };

  this.print = function () {
    for (let i = 0; i < items.length; i++) {
      console.log(items[i].element + " - " + items[i].priority);
    }
  };
}

let newQueue = new PriorityQueue();
newQueue.enQueue("carlos", 2);
newQueue.enQueue("ana", 1);
newQueue.enQueue("lucas", 1);
newQueue.enQueue("thiago", 2);
newQueue.print();
