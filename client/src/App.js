import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      {/*  <h1>Fetch from mongoDBasd</h1> */}
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
