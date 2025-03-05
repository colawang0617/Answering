import Entering from "./Pages/Entering"
import Home from "./Pages/Home"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Page1 from "./Pages/Page1"
import Answer from "./Pages/Answer"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entering/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Page1" element={<Page1/>}/>
        <Route path="/Home/:id" element={<Page1/>}/>
        <Route path="/Home/:id/answer" element={<Answer/>}/>
      </Routes>
    </Router>
  )
}

export default App
