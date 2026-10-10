export class Item{
  constructor(name, category, info){
    this.name = name;
    this.category = category;
    this.info = info;
  }
}

export class Weapon{
  constructor(attackpower, magicpower, type, bonus){
    this.attackpower = attackpower;
    this.magicpower = magicpower;
    this.type = type;
    this.bonus = bonus;
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