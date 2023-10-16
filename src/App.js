import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amenities from "./pages/Amenities";
import Bookings from "./pages/Bookings";
import Home from "./pages/Home";
import Packages from "./pages/Packages";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/Amenities" element={<Amenities />} />
            <Route path="/Packages" element={<Packages />} />
            <Route path="/Bookings" element={<Bookings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
