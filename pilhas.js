class Stack {
  constructor(item) {
    this.item = item;
  }

  push(element) {
    //adiciona um novo item a pilha
    this.item.push(element);
  }

  pop() {
    //remove o  item  no topo da pilha
    this.item.pop();
  }

  peek() {
    //devolve o elemento no topo da pilha
    return this.item[this.item.length - 1]; // retorna o ultimo item da pilha
  }

  isEmpity() {
    //informa se a pilha esta vazia ou não
    return Boolean(this.item.length === 0);
  }

  clear() {
    //limpa a pilha
    this.item = [];
  }

  size() {
    //informa o tamanho da pilha
    return this.item.length;
  }

  print() {
    //imprime a pilha no console
    console.log(this.item);
  }
}

const useStack = new Stack([1, 2, 3, 4]);
/* useStack.print(); // [1,2,3,4]
useStack.push(5); // [1,2,3,4,5]
useStack.print(); // [1,2,3,4,5]
useStack.pop(); // [1,2,3,4]
useStack.print(); // [1,2,3,4]
console.log(useStack.peek()); // 4
console.log(useStack.isEmpity()); // false
useStack.clear(); // []
useStack.print(); // []
console.log(useStack.size()); // 0
useStack.push(5); // [5]
console.log(useStack.size()); // 1
useStack.print(); // [5]
 */

//desafio de decimal para binario

function decToBinary(decNumber) {
  var restStack = [],
    rest,
    binaryString = "";

  while (decNumber > 0) {
    rest = Math.floor(decNumber % 2); // recebe o resto da divisao  do numero sendo arredondada ex 25 = 1 24 = 0
    restStack.push(rest); // insere no array ex [1,0]
    decNumber = Math.floor(decNumber / 2); //divide o numero por 2 arredondando pra baixo ex 25/2 = 12/2 =6
  }

  while (restStack.length > 0) {
    //cria uma string retirando valor doa rray da ultima posição da fila ex [1011] = '1101'
    binaryString += restStack.pop().toString();
  }

  return binaryString;
}

console.log("binary --> ", decToBinary(25));
