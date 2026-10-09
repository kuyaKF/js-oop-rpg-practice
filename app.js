class Item{
  constructor(name, category, info){
    this.name = name;
    this.category = category;
    this.info = info;
  }
}

class Weapon{
  constructor(attackpower, magicpower, type, bonus){
    this.attackpower = attackpower;
    this.magicpower = magicpower;
    this.type = type;
    this.bonus = bonus;
  }
}

class Armor{
  constructor(defense, magicdefense, type, bonus){
    this.defense = defense;
    this.magicdefense = magicdefense;
    this.type = type;
    this.bonus = bonus;
  }
}

class Accessory{
  constructor(str, vit, agi, int, bonus){
    this.str = str;
    this.vit = vit;
    this.agi = agi;
    this.int = int;
    this.bonus = bonus;
  }
}

class Job{
  constructor(name, type, basestats){
    this.name = name;
    this.type = type;
    this.basestats = basestats;
  }
}


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

    battleStats.defense = this.stats.vit/2.75;

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

const hbody1 = new Armor(5,0,"Heavy Armor",null);
const lbody1 = new Armor(3,0,"Light Armor",{agi: 1.1});
const robe1 = new Armor(3,7,"Robe",null);


const ring = new Accessory(3,0,0,0,{attackpower: 1.1,})
const pendant = new Accessory(0,3,0,0,{hp: 1.1,})

const falchion = new Item("Falchion", "Equipment", sword1);
const dagger = new Item("Dagger", "Equipment", knife1);
const staff = new Item("Staff", "Equipment", staff1);

const ironarmor = new Item("Iron Armor","Equipment", hbody1);
const leathersuit = new Item("Leather suit","Equipment", lbody1);
const magerobe = new Item("Mage's Robe","Equipment", robe1);

const mcgear = new Gear(falchion,null,null,null,ring,pendant);
const axelgear = new Gear(dagger,null,leathersuit,null,ring,null);
const gabbgear = new Gear(staff,null,null,null,null,null);

const warrior = new Job("Warrior", "Physical", {
  str: 10,
  vit: 15,
  agi: 10,
  int: 5
});

const thief = new Job("Thief", "Physical", {
  str: 12,
  vit: 10,
  agi: 20,
  int: 8
});

const mage = new Job("Mage", "Magic", {
  str: 2,
  vit: 8,
  agi: 8,
  int: 30
});

const mc = new Player("Gabby",6,warrior,mcgear);
const axel = new Player("Axel",4,thief,axelgear);
const gabb = new Player("Gabby",5,mage,gabbgear);

// console.log(mc);
// console.log(axel);

// console.dir(mc, { depth: null });
console.dir(axel, { depth: null });
// console.dir(gabb, { depth: null });
