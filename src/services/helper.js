import { Enemy } from "../models/Enemy.js";
import { mobs } from "../data/mobs";

export function addAccstats(objA, objB) {
  objA ??= {};
  objB ??= {};

  const result = {};
  const keys = new Set([
    ...Object.keys(objA),
    ...Object.keys(objB)
  ]);

  keys.delete("bonus");

  keys.forEach(key => {
    const valueA = objA[key];
    const valueB = objB[key];

    if (
      typeof valueA === "number" &&
      typeof valueB === "number"
    ) {
      result[key] = valueA + valueB;
    } else if (
      valueA !== null &&
      typeof valueA === "object" &&
      valueB !== null &&
      typeof valueB === "object"
    ) {
      result[key] = addAccstats(valueA, valueB);
    } else if (
      valueA !== null &&
      typeof valueA === "object"
    ) {
      result[key] = addAccstats(valueA, {});
    } else if (
      valueB !== null &&
      typeof valueB === "object"
    ) {
      result[key] = addAccstats({}, valueB);
    } else {
      result[key] = (valueA ?? 0) + (valueB ?? 0);
    }
  });

  return result;
}

export function spawnEnemy(enemy, playerlevel, dungeonlevel) {
  // Determine the enemy level range
  const minLevel = Math.max(1, playerlevel + dungeonlevel - 4);
  const maxLevel = Math.max(minLevel, playerlevel + dungeonlevel + 0);

  // Generate a random level within the range (inclusive)
  const randomLevel =
    Math.floor(Math.random() * (maxLevel - minLevel + 1)) + minLevel;

  // Create and level the enemy
  const newEnemy = new Enemy(enemy.name, enemy.baseStats);
  newEnemy.setLevel(randomLevel);

  return newEnemy;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateEncounter(playerlevel, dungeonlevel) {
  // Randomly choose between 1 and 4 enemies
  const enemyCount = randomInt(1, 4);

  // Get all available mob types from your catalogue
  const mobPool = Object.values(mobs);

  // Generate the encounter
  const encounter = Array.from(
    { length: enemyCount },
    () => {
      // Randomly select a mob type
      const randomMob = mobPool[
        randomInt(0, mobPool.length - 1)
      ];

      // Spawn the mob with randomized level scaling
      return spawnEnemy(
        randomMob,
        playerlevel,
        dungeonlevel
      );
    }
  );

  return encounter;
}
