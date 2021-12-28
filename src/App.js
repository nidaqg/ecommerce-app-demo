import React from "react";

import { Homepage } from "./Pages/Homepage/Homepage";
import { ShopPage } from "./Pages/ShopPage/ShopPage";

import "./app.scss";
import { BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/shop" element={<ShopPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
