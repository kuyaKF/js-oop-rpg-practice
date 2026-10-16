export class Item{
  constructor(name, category, info, tier){
    this.name = name;
    this.category = category;
    this.info = info;
    this.tier = tier;
  }
}

export class Weapon {
  constructor(attackpower, magicpower, type, bonus, part = "weapon") {
    this.attackpower = attackpower;
    this.magicpower = magicpower;
    this.type = type;
    this.bonus = bonus;
    this.part = part;
  }
}

export class Armor{
  constructor(defense, magicdefense, type, bonus, part){
    this.defense = defense;
    this.magicdefense = magicdefense;
    this.type = type;
    this.bonus = bonus;
    this.part = part;
  }
}

export class Accessory{
  constructor(str, vit, agi, int, bonus){
    this.str = str;
    this.vit = vit;
    this.agi = agi;
    this.int = int;
    this.bonus = bonus;
  }
}