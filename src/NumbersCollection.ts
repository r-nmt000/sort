export class NumbersCollection {
    constructor(private data: number[]) {}

    get length() {
        return this.data.length;
    }

    public compare(leftIndex: number, rightIndex: number):boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    public swap(leftIndex: number, rightIndex: number):void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}