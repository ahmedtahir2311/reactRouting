import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Component from "./Components/Routing";
import ComponentA from "./Components/CoponentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Component />}>
            <Route path="component-a" element={<ComponentA />} />
            <Route path="component-b" element={<ComponentB />} />
            <Route path="component-c" element={<ComponentC />} />
          </Route>
          <Route path="/users" element={<Component />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
