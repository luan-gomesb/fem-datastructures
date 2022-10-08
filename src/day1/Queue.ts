type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++;
        let node = { value: item } as Node<T>;

        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = node;
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
        let head = this.head;
        this.head = this.head.next;
        return head.value;
    }
    peek(): T | undefined {
        console.log(this.head);

        return this.head?.value;
    }
}
