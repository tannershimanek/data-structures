
export class Node_s<T> {
    val: T;
    next: Node_s<T> | null;

    constructor(val: T, next=null) {
        this.val = val;
        this.next = next;
    }
}

export class Node_d<T> {
    val: T;
    next: Node_d<T> | null;
    prev: Node_d<T> | null;

    constructor(val: T, next=null, prev=null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}


export interface LinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}


export class LinkedList<T> implements LinkedList<T> {

 // todo
 
}