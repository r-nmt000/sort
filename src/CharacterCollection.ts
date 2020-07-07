import {Sortable} from "./Sorter";

export class CharacterCollection implements Sortable {
    constructor(private data: string) {}

    get length() {
        return this.data.length;
    }

    public compare(leftIndex: number, rightIndex: number):boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }

    public swap(leftIndex: number, rightIndex: number):void {
        const characters = this.data.split('');

        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;

        this.data = characters.join('');
    }
}