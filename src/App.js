import './App.css';
import {Route, Routes} from "react-router-dom";
import BasicsOfMotion from "./components/BasicsOfMotion";
import Gestures from "./components/Gestures";
import AnimationControl from "./components/AnimationControl";
import ViewBasicAnimations from "./components/ViewBasicAnimations";
import ScrollAnimations from "./components/ScrollAnimations";
import LoadBar from "./components/LoadBar";
import GalleryPictures from "./components/GalleryPictures";
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/basics-motion" element={<BasicsOfMotion/>}/>
          <Route path="/gestures" element={<Gestures/>}/>
          <Route path="/animal-control" element={<AnimationControl/>}/>
          <Route path="/view-basic-animation" element={<ViewBasicAnimations/>}/>
          <Route path="/scroll-animation" element={<ScrollAnimations/>}/>
          <Route path="/load-bar" element={<LoadBar/>}/>
          <Route path="/gallery-pictures" element={<GalleryPictures/>}/>
      </Routes>
    </div>
  );
}

export default App;
