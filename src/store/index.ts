import { create } from "zustand"

type State = {
  isDarkModeEnabled: boolean
  setIsDarkModeEnabled: (value: boolean) => void
}

export const useStore = create<State>((set) => ({
  isDarkModeEnabled: false,
  setIsDarkModeEnabled: (value: boolean) =>
    set(() => ({ isDarkModeEnabled: value })),
}))
