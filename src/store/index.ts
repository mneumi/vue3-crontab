import { createPinia, defineStore } from "pinia"
import { IWorker } from "@/types"

const pinia = createPinia()

interface IState {
  workers: IWorker[]
}

const getStore = defineStore("store", {
  state: (): IState => {
    return {
      workers: []
    }
  },
  getters: {},
  actions: {
    setWorkers(ws: IWorker[]) {
      this.workers = ws
    }
  }
})

export { pinia, getStore }
