import { Job } from "../models/Job.js";

export const job = {
  warrior: new Job("warrior", "Warrior", "Physical", {
    str: 10,
    vit: 15,
    agi: 10,
    int: 5
  }),
  thief: new Job("thief", "Thief", "Physical", {
    str: 12,
    vit: 10,
    agi: 20,
    int: 8
  }),
  mage: new Job("mage", "Mage", "Magic", {
    str: 2,
    vit: 8,
    agi: 8,
    int: 30
  })
}