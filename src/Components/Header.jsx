import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <div className='text-3xl text-red-500 font-bold p-3 border-b-2 border-gray-500 flex justify-between items-center'>
      <span className='cursor-pointer '>Filmy<span className='text-white'>Duniya</span></span>
      <h1 className='text-xl text-white flex items-center cursor-pointer '>
        <Button> <AddIcon className='mr-1'/> <span className='text-white'>Add New</span></Button>
      </h1>
    </div>
  )
}

export default Header
