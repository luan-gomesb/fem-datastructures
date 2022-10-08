export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    //queue
    let q: Array<BinaryNode<number> | null> = [head];
    while (q.length) {
        let curr = q.shift();
        if (!curr) {
            continue;
        }
        if (curr.value == needle) {
            return true;
        }
        q.push(curr.left);
        q.push(curr.right);
    }
    return false;
}
