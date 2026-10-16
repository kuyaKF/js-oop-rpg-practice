export class Enemy {
  constructor(name, stats) {
    this.name = name;
    this.baseStats = { ...stats };
    this.stats = { ...stats };
    this.level = 0;
  }

  setLevel(level) {
    this.level = level;

    for (const [stat, value] of Object.entries(this.baseStats)) {
      this.stats[stat] = Math.round((value * level) / 3);
    }
  }
}