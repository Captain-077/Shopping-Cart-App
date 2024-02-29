import logo from './logo.svg';
import './App.css';
import HomeContainer from './container/HomeContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">



      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Header />}>
          <Route index element={<HomeContainer />}/> 
          <Route exact path="/cart" element={<Cart />}/> 
          </Route >

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
