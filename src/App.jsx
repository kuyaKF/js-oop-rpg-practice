import { useState } from 'react'
import { Player, Gear, Inventory } from "./models/Player"
import { job } from "./data/jobs"
import { item } from "./data/items"

const mc = new Player("Felix", 6, job.warrior);
const bag = new Inventory();

bag.addItem(item.hat);
bag.addItem(item.leathersuit);
bag.addItem(item.leatherboots);

mc.equipItem(item.falchion);
mc.equipItem(item.ironhelm);
mc.equipItem(item.ironarmor);
mc.equipItem(item.ironboots);
mc.equipItem(item.ring, "acc1");
mc.equipItem(item.pendant, "acc2");

function App() {

  return (
    <>
      
      <main className="min-h-screen bg-slate-950 p-6">
        <div className="rounded-xl border border-slate-700 bg-slate-900 mb-5 p-5 shadow-lg shadow-blue-950/20">
          <section>
            <h2 className="text-lg font-semibold text-blue-100">
              Character Sheet: {mc.name}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Class: {mc.job.name}
            </p>
          </section>

          <hr className="my-4 border-slate-700" />
          
          <div className="grid grid-cols-2 gap-4">
            <section>
              <h3 className="mb-3 text-md font-semibold text-blue-200">
                Character Stats
              </h3>

              {Object.entries(mc.stats).map(([param, value]) => (
                <div
                  key={param}
                  className="mb-1 flex justify-between rounded-lg border border-slate-800 bg-slate-800/70 p-3"
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

              {Object.entries(mc.batstats).map(([param, value]) => (
                <div
                  key={param}
                  className="mb-1 flex justify-between rounded-lg border border-slate-800 bg-slate-800/70 p-3"
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

            {Object.entries(mc.gear).map(([param, value]) => (
              <div
                key={param}
                className="mb-1 flex justify-between rounded-lg border border-slate-800 bg-slate-800/70 p-3"
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
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-5 shadow-lg shadow-blue-950/20">
          <section>
            <h2 className="text-lg font-semibold text-blue-100">
              Inventory
            </h2>
            
            <hr className="my-4 border-slate-700" />
            
            {Object.entries(bag.items).map(([param, value]) => (
              <div
                key={param}
                className="mb-1 flex justify-between rounded-lg border border-slate-800 bg-slate-800/70 p-3"
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
      </main>

    </>
  )
}

export default App