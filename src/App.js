import { Route, Router, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Modal from "./Components/Modal";
import PictureSlide from "./Components/Picturesslide";
import Home from "./Home";



const App = () => {

  return ( 
      <div>
        <section>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<PictureSlide />} path="/pictureSlide" />
            <Route element={<Signup />} path="/signup" />
          </Routes>
        </section>
      </div>

   );
}
 
export default App;