import './App.css';
import {useState} from 'react'
import { GridPage } from './pages/GridPage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GridPage/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
