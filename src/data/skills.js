export const skills = {
  warrior: {
    powerStrike: {
      id: "powerStrike",
      name: "Power Strike",
      description: "Deal increased physical damage to one enemy.",
      type: "active",
      target: "single",
      requiredLevel: 1,
      mpCost: 10,
      power: 1.8,
      scalingStat: "str",
    },

    ironDefense: {
      id: "ironDefense",
      name: "Iron Defense",
      description: "Temporarily increase your defense.",
      type: "active",
      target: "self",
      requiredLevel: 5,
      mpCost: 8,
      effect: {
        stat: "defense",
        amount: 0.5,
        duration: 3,
      },
    },
  },

  mage: {
    fireball: {
      id: "fireball",
      name: "Fireball",
      description: "Deal magic damage to one enemy.",
      type: "active",
      target: "single",
      requiredLevel: 1,
      mpCost: 15,
      power: 1.6,
      scalingStat: "magicpower",
    },
  },
};