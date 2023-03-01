import { create } from "zustand"

type State = {
  someState: boolean
}

export const useStore = create<State>((set) => ({
  someState: false,
}))
