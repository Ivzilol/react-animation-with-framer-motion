import './App.css';
import {Route, Routes} from "react-router-dom";
import BasicsOfMotion from "./components/BasicsOfMotion";
import Gestures from "./components/Gestures";
import AnimationControl from "./components/AnimationControl";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/basics-motion" element={<BasicsOfMotion/>}/>
          <Route path="/gestures" element={<Gestures/>}/>
          <Route path="/animal-control" element={<AnimationControl/>}/>
      </Routes>
    </div>
  );
}

export default App;
