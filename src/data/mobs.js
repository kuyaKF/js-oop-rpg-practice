import { Enemy } from '../models/Enemy.js';

export const mobs = {
  goblin: new Enemy("Goblin", {
    str: 4,
    vit: 2,
    agi: 7,
    int: 1,
  }),
  goblinwar: new Enemy("Goblin Warrior", {
    str: 6,
    vit: 4,
    agi: 8,
    int: 1,
  }),
};

// const enemy1 = mobs.goblin;

// enemy1.setLevel(6);

// console.log(enemy1);