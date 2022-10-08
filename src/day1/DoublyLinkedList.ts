import { nodeModuleNameResolver } from "typescript";

type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index greater than length, use append");
        } else if (idx === this.length) {
            return this.append(item);
        } else if (idx === 0) {
            return this.prepend(item);
        }

        this.length++;
        let node = this.getAt(idx);
        if (!node) return;

        let newNode = { value: item } as Node<T>;
        newNode.next = node;
        newNode.prev = node.prev;

        node.prev!.next = newNode;
        node.prev = newNode;
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail!.next = node;
            this.tail = node;
        }
        this.length++;
    }

    private getAt(id: number): Node<T> | undefined {
        let curr = this.head;
        let i = 0;
        while (i < id && curr) {
            i++;
            curr = curr.next;
        }
        return curr;
    }

    get(idx: number): T | undefined {
        let node = this.getAt(idx);
        return node?.value;
    }

    removeAt(idx: number): T | undefined {
        let node = this.getAt(idx);
        if (!node) return undefined;
        this.removeNode(node);
        return node?.value;
    }

    remove(item: T): T | undefined {
        let node = this.head;
        let i = 0;
        while (i < this.length && node) {
            i++;
            if (node.value === item) break;
            else node = node.next;
        }

        if (node) {
            this.removeNode(node);
            return node.value;
        }
        return undefined;
    }
    private removeNode(node: Node<T>): void {
        this.length--;
        //check if is head
        if (!node.prev) {
            this.head = node.next;
            return;
        }
        //check if it's tail
        if (!node.next) {
            this.tail = node.prev;
            return;
        }

        node.prev.next = node.next;
        node.next.prev = node.prev;
        return;
    }
}
