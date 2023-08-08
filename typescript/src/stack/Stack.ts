// Generic Stack class (fixed size)
// export class Stack<T> {
//   size: number;
//   stack: T[];
//   top: number = 0;

//   constructor(stackSize: number) {
//     this.size = stackSize;
//     this.stack = new Array<T>(stackSize);
//   }

//   isFull() {
//     return this.top >= this.size;
//   }

//   isEmpty() {
//     return this.top === 0;
//   }

//   push(item: T) {
//     if (this.isFull()) {
//       throw new Error(messages.stackIsFull);
//     }

//     this.stack[this.top] = item;
//     this.top++;
//   }

//   peek() {
//     if (this.top === 0) {
//         throw new Error(messages.stackIsEmpty);
//     }
//     // this.top - 1 because the top tells us the next empty location
//     return this.stack[this.top - 1];
//   }

//   pop() {
//     this.top--; // the top of the stack moves down 1
//     const val = this.stack[this.top];
//     this.stack.splice(this.top, 1);
//     return val;
//   }

//   clear() {
//     this.stack = new Array<T>(this.size);
//   }

//   // todo: printStack print the stack
// }

// const messages = {
//   stackIsFull: "Error: The stack is full, cannot add item.",
//   stackIsEmpty: "Error: The stack is empty.",
// };


// start by shaping the data, then make the data structure
type Node<T> = {
  value: T,
  prev?: Node<T>,
}

// first in last out
export class Stack<T> {
  public length: number = 0;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = undefined;
  }

  push(item: T): void {
    const node = {value: item} as Node<T>;
    this.length++;

    if (!this.head) {
      this.head = node;
    }
    
    node.prev = this.head;
    this.head = node;

  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1); // keep us above 0
    if (this.length === 0) {
      const head = this.head
      this.head = undefined;
      return head?.value;
    }

    const head = this.head as Node<T>;
    this.head = head.prev;

    // free
    head.prev = undefined;

    return head.value;
  }
  
  peek(): T | undefined {
    return this.head?.value;
  }

}
