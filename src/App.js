import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import NotFound from "./pages/notfound/Notfound";
import Categories from "./pages/categories/Categories";
function App() {
    return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Details/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    )
}

export default App;
