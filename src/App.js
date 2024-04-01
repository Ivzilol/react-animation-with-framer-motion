import './App.css';
import {Route, Routes} from "react-router-dom";
import BasicsOfMotion from "./components/BasicsOfMotion";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/basics-motion" element={<BasicsOfMotion/>}/>
      </Routes>
    </div>
  );
}

export default App;
