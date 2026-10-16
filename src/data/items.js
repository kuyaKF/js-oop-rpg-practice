
import { Item, Weapon, Armor, Accessory } from "../models/Item.js";

export const item = {
  // Weapons
  falchion: new Item("Falchion", "Equipment", new Weapon(20, 0, "Sword", null), 1),
  dagger: new Item("Dagger", "Equipment", new Weapon(14, 0, "Knife", null), 1),
  staff: new Item("Staff", "Equipment", new Weapon(5, 25, "Staff", null), 1),

  longsword: new Item("Longsword", "Equipment", new Weapon(28, 0, "Sword", { str: 1.1 }), 2),
  greatsword: new Item("Greatsword", "Equipment", new Weapon(38, 0, "Greatsword", { str: 1.15 }), 4),
  battleaxe: new Item("Battle Axe", "Equipment", new Weapon(32, 0, "Axe", null), 3),
  shortsword: new Item("Shortsword", "Equipment", new Weapon(18, 0, "Sword", { agi: 1.05 }), 2),
  wand: new Item("Apprentice Wand", "Equipment", new Weapon(3, 18, "Wand", { int: 1.1 }), 2),
  archstaff: new Item("Archmage Staff", "Equipment", new Weapon(8, 35, "Staff", { int: 1.15 }), 4),

  // Body Armor
  ironarmor: new Item("Iron Armor", "Equipment", new Armor(10, 0, "Heavy Armor", null, "body"), 2),
  leathersuit: new Item("Leather Suit", "Equipment", new Armor(3, 0, "Light Armor", { agi: 1.1 }, "body"), 1),
  magerobe: new Item("Mage's Robe", "Equipment", new Armor(3, 7, "Robe", null, "body"), 1),
  chainmail: new Item("Chainmail", "Equipment", new Armor(7, 1, "Medium Armor", null, "body"), 2),
  platearmor: new Item("Plate Armor", "Equipment", new Armor(15, 2, "Heavy Armor", { agi: 0.9 }, "body"), 4),
  shadowgarb: new Item("Shadow Garb", "Equipment", new Armor(5, 2, "Light Armor", { agi: 1.15 }, "body"), 3),
  mysticrobe: new Item("Mystic Robe", "Equipment", new Armor(4, 12, "Robe", { int: 1.15 }, "body"), 4),

  // Headgear
  helm: new Item("Helm", "Equipment", new Armor(4, 0, "Helm", null, "head"), 1),
  hat: new Item("Hat", "Equipment", new Armor(2, 0, "Hat", null, "head"), 1),
  circlet: new Item("Circlet", "Equipment", new Armor(0, 5, "Circlet", { int: 1.1 }, "head"), 2),
  ironhelm: new Item("Iron Helm", "Equipment", new Armor(7, 0, "Heavy Helm", null, "head"), 2),
  hood: new Item("Shadow Hood", "Equipment", new Armor(2, 2, "Hood", { agi: 1.1 }, "head"), 2),
  crown: new Item("Sage Crown", "Equipment", new Armor(1, 8, "Crown", { int: 1.15 }, "head"), 4),

  // Shoes
  leatherboots: new Item("Leather Boots", "Equipment", new Armor(2, 0, "Light Boots", { agi: 1.05 }, "shoes"), 1),
  ironboots: new Item("Iron Boots", "Equipment", new Armor(5, 0, "Heavy Boots", null, "shoes"), 2),
  mageboots: new Item("Mage Boots", "Equipment", new Armor(1, 4, "Magic Boots", { int: 1.05 }, "shoes"), 2),
  shadowboots: new Item("Shadow Boots", "Equipment", new Armor(3, 1, "Light Boots", { agi: 1.1 }, "shoes"), 3),

  // Accessories
  ring: new Item("Ring", "Equipment", new Accessory(3, 0, 0, 0, { attackpower: 1.1 }), 1),
  pendant: new Item("Pendant", "Equipment", new Accessory(0, 3, 0, 0, { hp: 1.1 }), 1),
  poweramulet: new Item("Power Amulet", "Equipment", new Accessory(5, 0, 0, 0, { attackpower: 1.15 }), 3),
  vitalitycharm: new Item("Vitality Charm", "Equipment", new Accessory(0, 5, 0, 0, { hp: 1.2 }), 3),
  agilitybracelet: new Item("Agility Bracelet", "Equipment", new Accessory(0, 0, 5, 0, { agi: 1.1 }), 3),
  intelligencependant: new Item("Intelligence Pendant", "Equipment", new Accessory(0, 0, 0, 5, { magicpower: 1.15 }), 3),
  guardianring: new Item("Guardian Ring", "Equipment", new Accessory(0, 4, 0, 0, { defense: 1.1 }), 3),
  luckycoin: new Item("Lucky Coin", "Equipment", new Accessory(1, 1, 2, 1, null), 2),
  sorcererstone: new Item("Sorcerer's Stone", "Equipment", new Accessory(0, 0, 2, 6, { magicpower: 1.2 }), 4),
  berserkerband: new Item("Berserker Band", "Equipment", new Accessory(6, 0, 0, 0, { attackpower: 1.2, hp: 0.9 }), 4)
};
