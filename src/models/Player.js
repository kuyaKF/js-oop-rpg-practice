import { addAccstats } from "../services/helper.js";
import { skills } from "../data/skills.js";

export class Player{
  constructor(name, level, job){
    this.name = name;
    this.level = level;
    this.job = job;
    this.gear = new Gear(null,null,null,null,null,null);
    this.stats = this.calcStats();
    this.batstats = this.battStats();
    this.skills = this.setSkills();
  }

  setSkills() {
    const jobSkills = skills[this.job.id];

    if (!jobSkills) return null;

    return Object.fromEntries(
      Object.entries(jobSkills).filter(
        ([id, skill]) => this.level >= skill.requiredLevel
      )
    );
  }

  levelUp(){
    this.level += 1;
    this.stats = this.calcStats();
    this.batstats = this.battStats();
    this.skills = this.setSkills();
  }

  equipItem(...itemInfo) {
    let item;
    let slot;
    let equippedItem;

    if (itemInfo.length === 1) {
      [item] = itemInfo;
      slot = item.info?.part;
    } else if (itemInfo.length === 2) {
      [item, slot] = itemInfo;
    } else {
      console.log("Invalid number of arguments.");
      return false;
    }

    if (!item || !slot || !(slot in this.gear)) {
      console.log("Invalid equipment slot or item.");
      return false;
    }

    equippedItem = this.gear[slot];

    this.gear[slot] = item;

    this.stats = this.calcStats();
    this.batstats = this.battStats();

    return equippedItem;
  }

  calcBonuses() {
    const bonuses = {};

    const equipment = [
      this.gear.weapon,
      this.gear.head,
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

    const firstAcc = addAccstats(
      calculatedStats,
      this.gear.acc1?.info
    );

    const totalAcc = addAccstats(
      firstAcc,
      this.gear.acc2?.info
    );

    const bonuses = this.calcBonuses();

    for (const stat of Object.keys(totalAcc)) {
      totalAcc[stat] = Math.round(
        totalAcc[stat] * (bonuses[stat] ?? 1)
      );
    }

    return totalAcc;
  }

  
  battStats() {
    const battleStats = {};
    const bonuses = this.calcBonuses();

    const weaponInfo = this.gear.weapon?.info;

    const headInfo = this.gear.head?.info;
    const bodyInfo = this.gear.body?.info;
    const shoesInfo = this.gear.shoes?.info;

    battleStats.attackpower = Math.round(
      (this.stats.str + (weaponInfo?.attackpower ?? 0)) *
      (bonuses.attackpower ?? 1)
    );

    battleStats.magicpower = Math.round(
      (this.stats.int + (weaponInfo?.magicpower ?? 0)) *
      (bonuses.magicpower ?? 1)
    );

    const armorDefense =
      (headInfo?.defense ?? 0) +
      (bodyInfo?.defense ?? 0) +
      (shoesInfo?.defense ?? 0);

    battleStats.defense = Math.round(
      this.stats.vit / 2.75 + armorDefense
    );

    const armorMDefense =
      (headInfo?.magicdefense ?? 0) +
      (bodyInfo?.magicdefense ?? 0) +
      (shoesInfo?.magicdefense ?? 0);

    battleStats.magicdefense = Math.round(
      this.stats.vit / 4 +
      this.stats.int / 1.75 +
      armorMDefense
    );

    battleStats.hp = Math.round(
      (this.stats.vit * 1.65 + this.level * 7) *
      (bonuses.hp ?? 1)
    );

    // MP calculations
    battleStats.Mp = Math.round(
      (this.stats.int * 2 + this.level * 5) *
      (bonuses.mp ?? 1)
    );

    return battleStats;
  }

}

export class Gear{
  constructor(weapon, head, body, shoes, acc1, acc2){
    this.weapon = weapon;
    this.head = head;
    this.body = body;
    this.shoes = shoes;
    this.acc1 = acc1;
    this.acc2 = acc2;
  }
}

export class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(...item) {
    this.items.push(...item);
    return this.items;
  }

  removeItem(itemToRemove) {
    const index = this.items.findIndex(
      item => item === itemToRemove
    );

    if (index !== -1) {
      this.items.splice(index, 1);
    }

    return this.items;
  }
}