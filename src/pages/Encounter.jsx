import { useState } from "react";

import { generateEncounter } from "../services/helper";

function Encounter() {

  const playerlevel = 10;
  const dungeonlevel = 5;

  // const [enemies] = useState(() => ({
  //   goblin1: spawnEnemy(mobs.goblin, playerlevel, dungeonlevel),
  //   goblin2: spawnEnemy(mobs.goblin, playerlevel, dungeonlevel),
  //   goblin3: spawnEnemy(mobs.goblinwar, playerlevel, dungeonlevel),
  //   goblin4: spawnEnemy(mobs.goblinmag, playerlevel, dungeonlevel),
  // }))

  const [enemies] = useState(() =>
    generateEncounter(playerlevel, dungeonlevel)
  );

  return (
    <main className="min-h-screen bg-slate-950 p-6">
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-5 shadow-lg shadow-blue-950/20">
        <section>
          <h2 className="text-lg font-semibold text-blue-100">
            Enemies
          </h2>

          <hr className="my-4 border-slate-700" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {Object.entries(enemies).map(([key, enemy]) => (
              <div
                key={key}
                className="rounded-lg border border-slate-800 bg-slate-800/70 p-4"
              >
                <h3 className="mb-1 text-lg font-semibold text-red-300">
                  {enemy.name}
                </h3>

                <p className="mb-4 text-sm text-slate-400">
                  Level: {enemy.level}
                </p>

                
                {/* Stats: 2 columns per mob */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Base Stats */}
                  <section>
                    <h4 className="mb-2 font-semibold text-blue-200">
                      Base Stats
                    </h4>

                    <div className="space-y-2">
                      {Object.entries(enemy.stats).map(([stat, value]) => (
                        <div
                          key={stat}
                          className="flex flex-col rounded-md bg-slate-900 px-3 py-2"
                        >
                          <span className="text-xs font-medium uppercase text-slate-400">
                            {stat}
                          </span>

                          <span className="font-semibold text-red-200">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Battle Stats */}
                  <section>
                    <h4 className="mb-2 font-semibold text-blue-200">
                      Battle Stats
                    </h4>

                    <div className="space-y-2">
                      {Object.entries(enemy.batstats).map(([stat, value]) => (
                        <div
                          key={stat}
                          className="flex flex-col rounded-md border border-slate-700 bg-slate-950 px-3 py-2"
                        >
                          <span className="text-xs font-medium capitalize text-slate-400">
                            {stat.replace(/([A-Z])/g, " $1")}
                          </span>

                          <span className="font-semibold text-red-200">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Encounter;