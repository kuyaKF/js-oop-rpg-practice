import { addAccstats } from "../services/helper.js";

export class Player{
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

export class Gear{
  constructor(weapon, headgear, body, shoes, acc1, acc2){
    this.weapon = weapon;
    this.headgear = headgear;
    this.body = body;
    this.shoes = shoes;
    this.acc1 = acc1;
    this.acc2 = acc2;
  }
}