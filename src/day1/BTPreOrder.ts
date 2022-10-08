export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);
    console.log(path);

    return path;
}
function walk(curr: BinaryNode<number> | null, path: number[]) {
    if (!curr) {
        return;
    }
    //pre
    path.push(curr.value);
    //rescurse
    walk(curr.left, path);
    walk(curr.right, path);
}
