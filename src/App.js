import './App.css';
import {Route, Routes} from "react-router-dom";
import BasicsOfMotion from "./components/BasicsOfMotion";
import Gestures from "./components/Gestures";
import AnimationControl from "./components/AnimationControl";
import ViewBasicAnimations from "./components/ViewBasicAnimations";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/basics-motion" element={<BasicsOfMotion/>}/>
          <Route path="/gestures" element={<Gestures/>}/>
          <Route path="/animal-control" element={<AnimationControl/>}/>
          <Route path="/view-basic-animation" element={<ViewBasicAnimations/>}/>
      </Routes>
    </div>
  );
}

export default App;
