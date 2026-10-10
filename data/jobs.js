import { Job } from "../models/Job.js";

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

export const jobList = [warrior, thief, mage];