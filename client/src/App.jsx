import Navbar from "./compoenents/navbar/Navbar"
import "./index.scss"
import "./layout.scss"
import HomePage from "./routes/homepage/Homepage"
function App() {
  return (
    <div className="layout">
      <div className="navbar">
      <Navbar/>
      </div>
     <div className="content">
     <HomePage/>
     </div>
    
    </div>
  )
}

export default App