import { MyCanvas } from "./components/Canvas"
import { Button } from "./components/html/Button"
import { darkMode } from "./designConfig"
import { useStore } from "./store"

function App() {
  const isDarkModeEnabled = useStore((state) => state.isDarkModeEnabled)
  const setIsDarkModeEnabled = useStore((state) => state.setIsDarkModeEnabled)
  return (
    <div
      style={{ height: "100vh" }}
      className={isDarkModeEnabled ? darkMode : ""}
    >
      <MyCanvas />
      <Button
        style={{ position: "absolute", top: 0, left: 0, margin: "10px" }}
        onClick={() => setIsDarkModeEnabled(!isDarkModeEnabled)}
      >
        Dark mode
      </Button>
    </div>
  )
}

export default App
