export class Enemy {
  constructor(name, stats) {
    this.name = name;
    this.baseStats = { ...stats };
    this.stats = { ...stats };
    this.level = 0;
    this.batstats = this.battStats();
  }

  setLevel(level) {
    this.level = level;

    const scalingFactor = Math.pow(level / 3, 0.9);

    for (const [stat, value] of Object.entries(this.baseStats)) {
      this.stats[stat] = Math.round(value * scalingFactor);
    }

    this.batstats = this.battStats();
  }

  battStats() {
    const battleStats = {};

    battleStats.attackpower = Math.round(
      this.stats.str * 1.1
    );

    battleStats.magicpower = Math.round(
      this.stats.int * 1.1
    );

    battleStats.defense = Math.round(
      this.stats.vit / 2.75
    );

    battleStats.magicdefense = Math.round(
      this.stats.vit / 4 + this.stats.int / 1.75
    );

    battleStats.hp = Math.round(
      this.stats.vit * 1.65 + Math.pow(this.level, 1.15) * 5
    );

    return battleStats;
  }
}
