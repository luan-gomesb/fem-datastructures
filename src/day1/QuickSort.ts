export default function quick_sort(arr: number[]): void {
    let left = 0;
    let right = arr.length - 1;
    qs(arr, left, right);
}

function qs(arr: number[], left: number, right: number): void {
    if (arr.length == 1 || arr.length == 0) return;

    let pivot = part(arr, left, right);
    //we use pivot-1 do not not wap the pivot on the partition
    if (left < pivot - 1) qs(arr, left, pivot - 1);

    if (pivot < right) qs(arr, pivot + 1, right);
}

function part(arr: number[], left: number, right: number): number {
    let pivot = (left + right) / 2;
    while (left <= right) {
        //get next element on left greater than pivot
        while (arr[left] < arr[pivot]) left++;
        //get next element on right minnro tha pivot
        while (arr[right] > arr[pivot]) right--;

        //here, we have the next left that need to be in the right side
        // ande the right, that need to be in the left side

        //now we swap
        if (left <= right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            //advance left and right indexes for the next loop
            left++;
            right--;
        }
    }
    //now left and right are equal we return the pivot
    return left;
}
