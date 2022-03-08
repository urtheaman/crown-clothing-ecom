import "./App.scss";
import Homepage from "./Pages/homepage/Homepage";
import { Route, Routes, Link } from "react-router-dom";
import Shop from "./Pages/shop/shop.comp";

const App = () => {
  return (
    <Routes>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
    </Routes>
  );
};

export default App;
