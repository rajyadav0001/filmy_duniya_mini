 
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Cards/>} />
        </Routes>
    </div>
  );
}

export default App;
