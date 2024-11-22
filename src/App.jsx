
import Display from "./components/Display"
import Player from "./components/Player"
import Sidebar from "./components/Sidebar"
import { PlayerContext } from "./context/PlayerContext"
import { useContext } from "react"


const App = () => {
    const {audioRef,track} = useContext(PlayerContext)
    return(
      <div className="min-h-screen bg-black">
        <div className="h-[90%] flex">
          <Sidebar/>
          <Display/> 
        </div>
        <Player/>
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
      
    
  )
}



export default App