import { useState } from "react";

import Button from "../components/Button";
import { Player, Inventory } from "../models/Player";
import { job } from "../data/jobs";
import { item } from "../data/items";

function Home() {
  
  const [user] = useState(() => {
    const player = new Player("Felix", 6, job.warrior)

    player.equipItem(item.falchion)
    player.equipItem(item.ironhelm)
    player.equipItem(item.ironarmor)
    player.equipItem(item.ironboots)
    player.equipItem(item.ring, "acc1")
    player.equipItem(item.pendant, "acc2")

    return player
  })

  const [bag] = useState(() => {
    const inventory = new Inventory()

    inventory.addItem(item.hat)
    inventory.addItem(item.leathersuit)
    inventory.addItem(item.leatherboots)

    return inventory
  })

  const [inventoryItems, setInventoryItems] = useState(() => [
    ...bag.items
  ])

  function clickToEquip(itemToEquip) {
    const itemTobag = user.equipItem(itemToEquip)

    bag.removeItem(itemToEquip)

    if (itemTobag) {
      bag.addItem(itemTobag)
    }

    setInventoryItems([...bag.items])
  }

  return (
    
    <main className="min-h-screen bg-slate-950 p-6">
      {/* Character Sheet and Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        {/* Character Sheet */}
        <div className="rounded-xl border border-slate-700 bg-slate-900 mb-5 p-5 shadow-lg shadow-blue-950/20">
          <section>
            <h2 className="text-lg font-semibold text-blue-100">
              Character Sheet: {user.name}
            </h2>

            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="rounded bg-slate-700 px-2 py-1 text-slate-200">
                
               Class: {user.job.name}
              </span>
              <span className="rounded bg-slate-700 px-2 py-1 text-slate-200">
                Level: {user.level}
              </span>
            </div>
            
          </section>

          <hr className="my-4 border-slate-700" />

          <div className="grid grid-cols-2 gap-4">
            <section>
              <h3 className="mb-3 text-md font-semibold text-blue-200">
                Character Stats
              </h3>

              {Object.entries(user.stats).map(([param, value]) => (
                <div
                  key={param}
                  className="mb-1 flex justify-between rounded-lg border border-slate-700 bg-slate-800/70 p-3"
                >
                  <span className="font-medium uppercase text-slate-300">
                    {param}
                  </span>
                  <span className="font-semibold text-blue-100">
                    {value}
                  </span>
                </div>
              ))}
            </section>

            <section>
              <h3 className="mb-3 text-md font-semibold text-blue-200">
                Battle Stats
              </h3>

              {Object.entries(user.batstats).map(([param, value]) => (
                <div
                  key={param}
                  className="mb-1 flex justify-between rounded-lg border border-slate-700 bg-slate-800/70 p-3"
                >
                  <span className="font-medium uppercase text-slate-300">
                    {param}
                  </span>
                  <span className="font-semibold text-blue-100">
                    {value}
                  </span>
                </div>
              ))}
            </section>
          </div>

          <hr className="my-4 border-slate-700" />

          <section>
            <h3 className="text-md font-semibold mb-3 text-blue-200">
              Character Equipment
            </h3>

            {Object.entries(user.gear).map(([param, value]) => (
              <div
                key={param}
                className="mb-1 flex justify-between rounded-lg border border-slate-700 bg-slate-800/70 p-3"
              >
                <span className="font-medium capitalize text-slate-300">
                  {param}
                </span>
                <span className="font-semibold text-blue-100">
                  {value === null ? "Nothing" : value.name}
                </span>
              </div>
            ))}
          </section>
        </div>

        {/* Skills */}
        <div className="rounded-xl border border-slate-700 bg-slate-900 mb-5 p-5 shadow-lg shadow-blue-950/20">
          <section>
            <h2 className="text-lg font-semibold text-blue-100">
              Skills
            </h2>

            <hr className="my-4 border-slate-700" />

            <div className="space-y-3">
              {Object.values(user.skills || {}).map((skill) => (
                <div
                  key={skill.id}
                  className="rounded-lg border border-slate-700 bg-slate-800 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-blue-200">
                      {skill.name}
                    </h3>

                    <span className="text-sm text-blue-400">
                      {skill.mpCost} MP
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-300">
                    {skill.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="rounded bg-slate-700 px-2 py-1 text-slate-200">
                      {skill.type}
                    </span>

                    <span className="rounded bg-slate-700 px-2 py-1 text-slate-200">
                      Target: {skill.target}
                    </span>
                  </div>
                </div>
              ))}

              {Object.keys(user.skills || {}).length === 0 && (
                <p className="text-sm text-slate-400">
                  No skills learned yet.
                </p>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Inventory */}
      <div className="rounded-xl border border-slate-700 bg-slate-900 mb-5 p-5 shadow-lg shadow-blue-950/20">
        <section>
          <h2 className="text-lg font-semibold text-blue-100">
            Inventory
          </h2>

          <hr className="my-4 border-slate-700" />

          {inventoryItems.map((value, index) => (
            <div
              key={`${value.name}-${index}`}
              className="mb-1 flex justify-between rounded-lg border border-slate-700 bg-slate-800/70 p-3"
            >
              <Button onClick={() => clickToEquip(value)} size="sm">
                Equip
              </Button>

              <span className="font-semibold text-blue-100">
                {value.name}
              </span>
            </div>
          ))}
        </section>
      </div>
    </main>

  )
}

export default Home;