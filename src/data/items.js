
import { Item, Weapon, Armor, Accessory } from "../models/Item.js";

export const item = {
  // Weapons
  falchion: new Item(
    "Falchion",
    "Equipment",
    new Weapon(20, 0, "Sword", null)
  ),

  dagger: new Item(
    "Dagger",
    "Equipment",
    new Weapon(14, 0, "Knife", null)
  ),

  staff: new Item(
    "Staff",
    "Equipment",
    new Weapon(5, 25, "Staff", null)
  ),

  longsword: new Item(
    "Longsword",
    "Equipment",
    new Weapon(28, 0, "Sword", { str: 1.1 })
  ),

  greatsword: new Item(
    "Greatsword",
    "Equipment",
    new Weapon(38, 0, "Greatsword", { str: 1.15 })
  ),

  battleaxe: new Item(
    "Battle Axe",
    "Equipment",
    new Weapon(32, 0, "Axe", null)
  ),

  shortsword: new Item(
    "Shortsword",
    "Equipment",
    new Weapon(18, 0, "Sword", { agi: 1.05 })
  ),

  wand: new Item(
    "Apprentice Wand",
    "Equipment",
    new Weapon(3, 18, "Wand", { int: 1.1 })
  ),

  archstaff: new Item(
    "Archmage Staff",
    "Equipment",
    new Weapon(8, 35, "Staff", { int: 1.15 })
  ),

  // Body Armor
  ironarmor: new Item(
    "Iron Armor",
    "Equipment",
    new Armor(10, 0, "Heavy Armor", null, "body")
  ),

  leathersuit: new Item(
    "Leather Suit",
    "Equipment",
    new Armor(3, 0, "Light Armor", { agi: 1.1 }, "body")
  ),

  magerobe: new Item(
    "Mage's Robe",
    "Equipment",
    new Armor(3, 7, "Robe", null, "body")
  ),

  chainmail: new Item(
    "Chainmail",
    "Equipment",
    new Armor(7, 1, "Medium Armor", null, "body")
  ),

  platearmor: new Item(
    "Plate Armor",
    "Equipment",
    new Armor(15, 2, "Heavy Armor", { agi: 0.9 }, "body")
  ),

  shadowgarb: new Item(
    "Shadow Garb",
    "Equipment",
    new Armor(5, 2, "Light Armor", { agi: 1.15 }, "body")
  ),

  mysticrobe: new Item(
    "Mystic Robe",
    "Equipment",
    new Armor(4, 12, "Robe", { int: 1.15 }, "body")
  ),

  // Headgear
  helm: new Item(
    "Helm",
    "Equipment",
    new Armor(4, 0, "Helm", null, "head")
  ),

  hat: new Item(
    "Hat",
    "Equipment",
    new Armor(2, 0, "Hat", null, "head")
  ),

  circlet: new Item(
    "Circlet",
    "Equipment",
    new Armor(0, 5, "Circlet", { int: 1.1 }, "head")
  ),

  ironhelm: new Item(
    "Iron Helm",
    "Equipment",
    new Armor(7, 0, "Heavy Helm", null, "head")
  ),

  hood: new Item(
    "Shadow Hood",
    "Equipment",
    new Armor(2, 2, "Hood", { agi: 1.1 }, "head")
  ),

  crown: new Item(
    "Sage Crown",
    "Equipment",
    new Armor(1, 8, "Crown", { int: 1.15 }, "head")
  ),

  // Shoes
  leatherboots: new Item(
    "Leather Boots",
    "Equipment",
    new Armor(2, 0, "Light Boots", { agi: 1.05 }, "shoes")
  ),

  ironboots: new Item(
    "Iron Boots",
    "Equipment",
    new Armor(5, 0, "Heavy Boots", null, "shoes")
  ),

  mageboots: new Item(
    "Mage Boots",
    "Equipment",
    new Armor(1, 4, "Magic Boots", { int: 1.05 }, "shoes")
  ),

  shadowboots: new Item(
    "Shadow Boots",
    "Equipment",
    new Armor(3, 1, "Light Boots", { agi: 1.1 }, "shoes")
  ),

  // Accessories
  ring: new Item(
    "Ring",
    "Equipment",
    new Accessory(3, 0, 0, 0, { attackpower: 1.1 })
  ),

  pendant: new Item(
    "Pendant",
    "Equipment",
    new Accessory(0, 3, 0, 0, { hp: 1.1 })
  ),

  poweramulet: new Item(
    "Power Amulet",
    "Equipment",
    new Accessory(5, 0, 0, 0, { attackpower: 1.15 })
  ),

  vitalitycharm: new Item(
    "Vitality Charm",
    "Equipment",
    new Accessory(0, 5, 0, 0, { hp: 1.2 })
  ),

  agilitybracelet: new Item(
    "Agility Bracelet",
    "Equipment",
    new Accessory(0, 0, 5, 0, { agi: 1.1 })
  ),

  intelligencependant: new Item(
    "Intelligence Pendant",
    "Equipment",
    new Accessory(0, 0, 0, 5, { magicpower: 1.15 })
  ),

  guardianring: new Item(
    "Guardian Ring",
    "Equipment",
    new Accessory(0, 4, 0, 0, { defense: 1.1 })
  ),

  luckycoin: new Item(
    "Lucky Coin",
    "Equipment",
    new Accessory(1, 1, 2, 1, null)
  ),

  sorcererstone: new Item(
    "Sorcerer's Stone",
    "Equipment",
    new Accessory(0, 0, 2, 6, { magicpower: 1.2 })
  ),

  berserkerband: new Item(
    "Berserker Band",
    "Equipment",
    new Accessory(6, 0, 0, 0, { attackpower: 1.2, hp: 0.9 })
  )
};
