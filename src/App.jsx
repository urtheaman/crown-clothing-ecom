import "./App.scss";
import Homepage from "./Pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/shop/Shop";

const App = () => {
  return (
    <Routes>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
    </Routes>
  );
};

export default App;
