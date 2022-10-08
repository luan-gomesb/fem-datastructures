export default function post_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);
    console.log(path);

    return path;
}
function walk(curr: BinaryNode<number> | null, path: number[]): number {
    if (!curr) {
        return -1;
    }
    //pre
    //rescurse
    walk(curr.left, path);
    walk(curr.right, path);
    path.push(curr.value);
    return curr.value;
}
