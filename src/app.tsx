import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Link, Route, Routes } from "react-router-dom";

import Main from './Components/Main';
import Hello from './Components/Hello';

function render() {
  const root = createRoot(document.getElementById('root')!);
  root.render(
    <HashRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/test" element={<Hello></Hello>} />
      </Routes>

    </HashRouter >);

}

render();
