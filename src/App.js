import React from "react";
import { Homepage } from "./Pages/Homepage/Homepage";
import "./app.scss";
import { BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom";


const HatsPage = () => {
  return (
  <div>
    <h1>Hats Page</h1>
  </div>
  )
}

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/hats" element={<HatsPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
