import React, { useEffect, useState } from "react";
import ReactStars from 'react-stars'
import { Oval } from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
      async function getData(){
        setLoading(true);
         const _data = await getDocs(moviesRef);
         _data.forEach((doc)=>{
            setData((prev)=>[...prev, {...(doc.data()), id:doc.id}])
         })
         console.log(_data)
        setLoading(false);    
      }
      getData();
  },[]);


  return (
    <div className="flex flex-wrap justify-evenly p-4 ">
    { loading ? <div className="w-full flex justify-center items-center min-h-screen "><Oval color="white" /></div>: 
      data.map((ele, i) => {
        return (
          <div key={i} className="card shadow-lg p-1 font-medium hover:-translate-y-3 cursor-pointer mt-8 transition-all duration-500 ">
            <img className="h-80 w-60  " src={ele.image} alt=""/>
            <h1>
              <span className="text-gray-400 ">Name:</span> {ele.title}
            </h1>
            <h1 className="flex items-center">
              <span className="text-gray-400 mr-1 ">Rating:</span><ReactStars
                size={20}
                half={true}
                edit={false}
                value={4}
               />
                
            </h1>
            <h1>
              <span className="text-gray-400 ">Year:</span> {ele.year}
            </h1>
          </div>
        );
      })
    }
    </div>
  );
};

export default Cards;
