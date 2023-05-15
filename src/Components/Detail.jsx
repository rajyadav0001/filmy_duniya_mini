import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import {Bars, TailSpin} from 'react-loader-spinner';

const Detail = () => {
  const {id} = useParams();
  const [data,setData] = useState({
    title:"",
    year:"",
    image:"",
    description:""
  });
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    async function getData(){
      const _doc = doc( db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
    }
    getData()
  },[])
  return (
    <div className=' p-4 mt-4 w-full flex flex-col md:flex-row items-center md:items-start justify-center '>
      { loading ? <Bars height={25} color='white' /> :
       <>
        <img className=' h-96 md:w-64 md:sticky block top-24' src={data.image} alt="Avenger's Endgame img" />
        <div className=' md:ml-10 ml-8 w-full md:w-1/2 '>
            <h1 className=' text-3xl font-bold text-gray-300 '>{data.title} <span className='text-xl'>({data.year})</span> </h1>
            <ReactStars
                size={20}
                half={true}
                edit={false}
                value={4}
             />
            <p className=' mt-4 md:w-4/6 '>
               {data.description}
            </p>
        </div>  
        </> }
    </div>
  )
}

export default Detail
 