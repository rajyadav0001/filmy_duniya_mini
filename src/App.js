 
import { Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import AddMovie from './Components/AddMovie';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Cards/>} />
            <Route path="/addmovie" element={<AddMovie/>} />
        </Routes>
    </div>
  );
}

export default App;
