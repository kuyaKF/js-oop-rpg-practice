
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
    new Armor(0, 5, "Hat", { int: 1.1 }, "head")
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
  )
};
