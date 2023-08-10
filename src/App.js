import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/Notfound";
import Tech from "./pages/tech/Tech";
import Sports from "./pages/sports/Sports";
import Worklife from "./pages/worklife/Worklife";
import Travel from "./pages/travel/Travel";
import Future from "./pages/future/Future";
import Culture from "./pages/culture/Culture";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/worklife" element={<Worklife />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/future" element={<Future />} />
        <Route path="/culture" element={<Culture/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


