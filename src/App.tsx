import { createContext, useCallback, useContext, useState } from "react"

import { MyCanvas } from "./components/Canvas"
import { Button } from "./components/UI/Button"
import { Icon } from "./components/UI/Icon"
import { darkMode } from "./designConfig"

type Themes = "light" | "dark"

const themeContext = createContext<{ theme: Themes }>({ theme: "light" })
export const useThemeContext = () => useContext(themeContext)

function App() {
  const [currentTheme, setCurrentTheme] = useState<Themes>("light")

  const switchTheme = useCallback(() => {
    currentTheme === "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light")
  }, [currentTheme])

  return (
    <themeContext.Provider value={{ theme: currentTheme }}>
      <div
        style={{ height: "100vh" }}
        className={currentTheme === "dark" ? darkMode : ""}
      >
        <MyCanvas />
        <Button
          iconButton
          style={{ position: "absolute", top: 0, right: 0, margin: "10px" }}
          onClick={switchTheme}
        >
          <Icon iconName="moon" size="large" />
        </Button>
      </div>
    </themeContext.Provider>
  )
}

export default App
