import WebApp from "@twa-dev/sdk"
import { useEffect } from "react"


function App() {

  useEffect(() => {
    WebApp.ready()
  }, [])

  function handleClose() {
    WebApp.close()
  }

  return (
    <div>
        work
        <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default App
