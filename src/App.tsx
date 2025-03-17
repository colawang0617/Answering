import Entering from "./Pages/Entering"
import Home from "./Pages/Home"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Answer from "./Pages/Answer"
import Course1 from "./Pages/Course1"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entering/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Course" element={<Course1/>}/>
        <Route path="/Home/:id" element={<Course1/>}/>
        <Route path="/Home/:id/answer" element={<Answer/>}/>
      </Routes>
    </Router>
  )
}

export default App
