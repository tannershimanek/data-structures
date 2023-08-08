// first in first out

type Node<T> = {
    value: T,
    next?: Node<T>,
}

export class Queue<T> {
    public length: number = 0;
    private head?: Node<T>;
    private tail?: Node<T>;

    consrtuctor() {
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        // not needed in js but feels more complete
        head.next = undefined;

        if (this.length === 0 ) {
            this.tail = undefined;
        }

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}