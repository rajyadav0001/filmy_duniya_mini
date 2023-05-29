import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AppState } from '../App';

const Header = () => {
  const useAppState = useContext(AppState);
  return (
    
    <div className=' sticky top-0 z-10 bg-black text-3xl text-red-500 font-bold p-3 border-b-2 border-gray-500 flex justify-between items-center'>
     <Link to={'/'}><span className='cursor-pointer '>Filmy<span className='text-white'>Duniya</span></span> </Link>
     { 
      <Link to={'/login'}> 
        <h1 className='text-xl text-white bg-green-500 flex items-center cursor-pointer '>
           <Button><span className='text-white capitalize'>Login</span></Button>
        </h1>
      </Link>
     }
    </div>
    
  )
}

export default Header
