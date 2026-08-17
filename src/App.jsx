import { useState } from 'react'
import Home from './Home'
import Game from './Game'


function App() {

  const [view, setView] = useState("home")
  const [language, setLanguage] = useState("italiano")

  return (
    <>
      {view === "home" && <Home language={language} setLanguage={setLanguage} setView={setView}/>}
      {view === "game" && <Game language={language}/>}
    </>
  )
}

export default App
