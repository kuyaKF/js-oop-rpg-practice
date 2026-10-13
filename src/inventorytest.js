import { Inventory } from './models/Player.js'
import { item } from "./data/items.js";

const bag = new Inventory();

bag.addItem(item.hat);
bag.addItem(item.hat);

console.log(bag.items);



console.log(bag.items);