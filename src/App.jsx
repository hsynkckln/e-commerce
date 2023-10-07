import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Basket from "./components/Basket"
import Navbar from './components/Navbar';
import { CommerceProvider } from './context/CommerceProvider';


function App() {
  return (
    <div >
      <CommerceProvider>
        <Navbar></Navbar>
        <Basket></Basket>
        <div className='container'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>

              <Route path="/detail/:id" element={<Detail></Detail>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </CommerceProvider>
    </div>
  );
}

export default App;
