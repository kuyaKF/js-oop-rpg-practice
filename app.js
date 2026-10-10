import { Item, Weapon, Armor, Accessory } from "./models/Item.js";
import { getJob } from "./services/helper.js";

function addAccstats(objA, objB) {
  objA ??= {};
  objB ??= {};

  const result = {};
  const keys = new Set([
    ...Object.keys(objA),
    ...Object.keys(objB)
  ]);

  keys.delete("bonus");

  keys.forEach(key => {
    const valueA = objA[key];
    const valueB = objB[key];

    if (
      typeof valueA === "number" &&
      typeof valueB === "number"
    ) {
      result[key] = valueA + valueB;
    } else if (
      valueA !== null &&
      typeof valueA === "object" &&
      valueB !== null &&
      typeof valueB === "object"
    ) {
      result[key] = addAccstats(valueA, valueB);
    } else if (
      valueA !== null &&
      typeof valueA === "object"
    ) {
      result[key] = addAccstats(valueA, {});
    } else if (
      valueB !== null &&
      typeof valueB === "object"
    ) {
      result[key] = addAccstats({}, valueB);
    } else {
      result[key] = (valueA ?? 0) + (valueB ?? 0);
    }
  });

  return result;
}


class Player{
  constructor(name, level, job, gear){
    this.name = name;
    this.level = level;
    this.job = job;
    this.gear = gear;
    this.stats = this.calcStats();
    this.batstats = this.battStats();
  }

  calcBonuses() {
    const bonuses = {};

    const equipment = [
      this.gear.weapon,
      this.gear.headgear,
      this.gear.body,
      this.gear.shoes,
      this.gear.acc1,
      this.gear.acc2
    ];

    for (const item of equipment) {
      if (!item) continue;

      const itemBonuses = item.info?.bonus ?? item.bonus ?? {};

      for (const stat in itemBonuses) {
        bonuses[stat] ??= 1;
        bonuses[stat] *= itemBonuses[stat];
      }
    }

    return bonuses;
  }


  
  calcStats() {
    const calculatedStats = {};

    for (const stat in this.job.basestats) {
      calculatedStats[stat] = Math.round(
        this.job.basestats[stat] * this.level / 3
      );
    }

    const stat1 = addAccstats(calculatedStats, this.gear.acc1);
    const stat2 = addAccstats(stat1, this.gear.acc2);

    const bonuses = this.calcBonuses();

    for (const stat of Object.keys(stat2)) {
      stat2[stat] = Math.round(
        stat2[stat] * (bonuses[stat] ?? 1)
      );
    }

    return stat2;
  }

  battStats() {
    const battleStats = {};

    const bonuses = this.calcBonuses();

    battleStats.attackpower =
      Math.round((this.stats.str + this.gear.weapon.info.attackpower) *
      (bonuses.attackpower ?? 1));

    battleStats.magicpower =
      Math.round((this.stats.int + this.gear.weapon.info.magicpower) *
      (bonuses.magicpower ?? 1));

    battleStats.defense = Math.round(this.stats.vit/2.75);

    battleStats.hp = Math.round(((this.stats.vit * 1.65) + (this.level*7)) * (bonuses.hp ?? 1));

    return battleStats;
  }
}

class Gear{
  constructor(weapon, headgear, body, shoes, acc1, acc2){
    this.weapon = weapon;
    this.headgear = headgear;
    this.body = body;
    this.shoes = shoes;
    this.acc1 = acc1;
    this.acc2 = acc2;
  }
}

const sword1 = new Weapon(20,0,"Sword",null);
const knife1 = new Weapon(14,0,"Knife",null);
const staff1 = new Weapon(5,25,"Staff",null);

const hbody1 = new Armor(5,0,"Heavy Armor",null, "body");
const lbody1 = new Armor(3,0,"Light Armor",{agi: 1.1}, "body");
const robe1 = new Armor(3,7,"Robe",null, "body");

const hhead1 = new Armor(4,0,"Helm",null, "head"); 
const lhead1 = new Armor(2,0,"Hat",null, "head");
const mhead1 = new Armor(0,5,"Hat",{int: 1.1}, "head");

const ring = new Accessory(3,0,0,0,{attackpower: 1.1,})
const pendant = new Accessory(0,3,0,0,{hp: 1.1,})

const falchion = new Item("Falchion", "Equipment", sword1);
const dagger = new Item("Dagger", "Equipment", knife1);
const staff = new Item("Staff", "Equipment", staff1);

const ironarmor = new Item("Iron Armor","Equipment", hbody1);
const leathersuit = new Item("Leather suit","Equipment", lbody1);
const magerobe = new Item("Mage's Robe","Equipment", robe1);

const circlet = new Item("Circlet","Equipment", mhead1);

const mcgear = new Gear(falchion,null,null,null,ring,pendant);
const axelgear = new Gear(dagger,null,leathersuit,null,ring,null);
const gabbgear = new Gear(staff,circlet,null,null,null,null);

const mc = new Player("Kirigab", 6, getJob('Warrior'), mcgear);
// const axel = new Player("Axel",4,thief,axelgear);
// const gabb = new Player("Gabby",5,mage,gabbgear);

// console.log(mc);
// console.log(axel);

console.dir(mc, { depth: null });
// console.dir(axel, { depth: null });
// console.dir(gabb, { depth: null });