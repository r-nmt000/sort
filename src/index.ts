import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";
import {CharacterCollection} from "./CharacterCollection";


// const collection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(collection);
// sorter.sort();
// console.log(sorter.getCollection());

const collection = new CharacterCollection("xajej");
const sorter = new Sorter(collection);
sorter.sort();
console.log(sorter.getCollection());