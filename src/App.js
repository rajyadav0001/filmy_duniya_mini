 
import { Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import AddMovie from './Components/AddMovie';
import Detail from './Components/Detail';
import { createContext, useState } from 'react';
import Login from './Components/Login';
import Singup from './Components/Singup';

const AppState = createContext();


function App() {
  const [login,setLogin] = useState(false);
  const [userName,setUserName] = useState("");

  return (
    <AppState.Provider value={{login, userName, setLogin , setUserName}}> 
      <div className="App relative">
          <Header/>
          <Routes>
              <Route path="/" element={<Cards/>} />
              <Route path="/addmovie" element={<AddMovie/>} />
              <Route path="/detail/:id" element={<Detail/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Singup/>} />
          </Routes>
      </div>
    </AppState.Provider>
  );
}
export default App;
export {AppState};
