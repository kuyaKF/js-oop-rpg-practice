import { useState } from 'react'
import { Player, Gear } from "./models/Player"
import { job } from "./data/jobs"
import { item } from "./data/items"


const mc = new Player("Felix", 6, job.warrior);

function App() {

  return (
    <>
    <main className="min-h-screen bg-gray-100 p-6">
      <div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <section>
          <h2 class="text-lg font-semibold text-gray-900">
            Character Sheet: {mc.name}
          </h2>
          <p class="mt-1 text-sm text-gray-500">
            Class: {mc.job.name}
          </p>
          <hr className="my-4 border-gray-200" />
        </section>
        

        <section>
          <h3 className="text-md font-semibold text-gray-800">
            Character Stats
          </h3>

          {/* Add your character stats here */}
        </section>
      </div>
    </main>
    </>
  )
}

export default App