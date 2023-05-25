import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import {Bars } from 'react-loader-spinner';
import Reviews from './Reviews';

const Detail = () => {
  const {id} = useParams();
  const [data,setData] = useState({
    title:"",
    year:"",
    image:"",
    description:"",
    rating: 0,
    rated : 0,
  });
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    async function getData(){
      setLoading(true);
      const _doc = doc( db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false);
    }
    getData()
  },[])
  return (
    <div className=' p-4 mt-4 w-full flex flex-col md:flex-row items-center md:items-start justify-center '>
      { loading ? <div className=' h-96 flex w-full justify-center items-center'><Bars height={25} color='white' /></div> :
       <>
        <img className=' h-96 md:w-64 md:sticky block top-24' src={data.image} alt="Avenger's Endgame img" />
        <div className=' md:ml-10 ml-8 w-full md:w-1/2 '>
            <h1 className=' text-3xl font-bold text-gray-300 '>{data.title} <span className='text-xl'>({data.year})</span> </h1>
            <ReactStars
                size={20}
                half={true}
                edit={false}
                value={data.rating/data.rated}
             />
            <p className=' mt-4 w-full '>
               {data.description}
            </p>
            <Reviews id={id} prevRating={data.rating} userRated={data.rated}/>
        </div>  
        </> }
    </div>
  )
}

export default Detail
 