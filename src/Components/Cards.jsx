import React, { useState } from "react";
import ReactStars from 'react-stars'

const Cards = () => {
  const [data, setData] = useState([
    {
      Name: "Avengers Endgame",
      Rating: 5,
      Year: 2019,
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
        Name: "Avengers Endgame",
        Rating: 3,
        Year: 2019,
        img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
        Name: "Avengers Endgame",
        Rating: 4.5,
        Year: 2019,
        img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
        Name: "Avengers Endgame",
        Rating: 3.5,
        Year: 2019,
        img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
    },
    {
        Name: "Avengers Endgame",
        Rating: 2,
        Year: 2019,
        img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg",
    },
    

  ]);
  return (
    <div className="flex flex-wrap justify-between p-4 ">
      {data.map((ele, i) => {
        return (
          <div key={i} className="card shadow-lg p-1 font-medium hover:-translate-y-3 cursor-pointer mt-8 transition-all duration-500 ">
            <img className="h-80 w-60 " src={ele.img} alt=""/>
            <h1>
              <span className="text-gray-400 ">Name:</span> {ele.Name}
            </h1>
            <h1 className="flex items-center">
              <span className="text-gray-400 mr-1 ">Rating:</span><ReactStars
                size={20}
                half={true}
                edit={false}
                value={ele.Rating}
               />
                
            </h1>
            <h1>
              <span className="text-gray-400 ">Year:</span> {ele.Year}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
