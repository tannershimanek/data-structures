// Generic Stack class (fixed size)
export class Stack<T> {
  size: number;
  stack: T[];
  top: number = 0;

  constructor(stackSize: number) {
    this.size = stackSize;
    this.stack = new Array<T>(stackSize);
  }

  // check if the stack is full
  isFull() {
    return this.top >= this.size;
  }

  // push an element to the stack
  push(item: T) {
    if (this.isFull()) {
      throw new Error(messages.stackIsFull);
    }

    this.stack[this.top] = item;
    this.top++;
  }

  // peek the top element of the stack
  peek() {
    if (this.top === 0) {
      throw new Error(messages.stackIsEmpty);
    }
    // this.top - 1 because the top tells us the next empty location
    return this.stack[this.top - 1];
  }

  pop() {
    this.top--; // the top of the stack moves down 1
    const val = this.stack[this.top];
    this.stack.splice(this.top, 1);
    return val;
  }

  clear() {
    this.stack = new Array<T>(this.size);
  }

  // todo: printStack print the stack
}

const messages = {
  stackIsFull: "Error: The stack is full, cannot add item.",
  stackIsEmpty: "Error: The stack is empty.",
};
