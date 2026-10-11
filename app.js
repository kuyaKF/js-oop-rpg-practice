import { Player, Gear } from "./models/Player.js";
import { job } from "./data/jobs.js";
import { item } from "./data/items.js";

const mcgear = new Gear(item.falchion,null,null,null,item.ring,item.pendant);
const axelgear = new Gear(item.dagger,null,item.leathersuit,null,item.ring,null);
const gabbgear = new Gear(item.staff,item.circlet,null,null,null,null);

const mc = new Player("Kirigab", 6, job.warrior);
// const axel = new Player("Axel",4,thief,axelgear);
// const gabb = new Player("Gabby",5,mage,gabbgear);

// console.log(mc);
// console.log(axel);

mc.equipItem(item.falchion);

mc.equipItem(item.ironarmor);
mc.equipItem(item.ring, "acc1");
mc.equipItem(item.pendant, "acc2");

// console.dir(mc, { depth: null });

console.log(mc);

// console.dir(axel, { depth: null });
// console.dir(gabb, { depth: null });