import React from 'react';
import {Route, Routes} from "react-router-dom";
import Page1 from "./pages/Page1/Page1";
import './style.scss'
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";
const App = () => {
    return (
      <Routes>
          <Route path={'/'} element={<Page1/>}/>
          <Route path={'/second'} element={<Page2/>}/>
          <Route path={'/third'} element={<Page3/>}/>
      </Routes>
    );
};

export default App;