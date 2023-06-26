import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/picsome" element={<Photos />} />
        <Route path="/picsome/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
