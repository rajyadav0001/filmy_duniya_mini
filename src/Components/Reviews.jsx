import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars';
import { reviewsRef, db } from '../firebase/firebase';
import { addDoc , doc , updateDoc, query, where, getDocs } from 'firebase/firestore';
import { TailSpin, ThreeDots } from 'react-loader-spinner';
import swal from 'sweetalert';

const Reviews = ({id, prevRating, userRated  }) => {
    const [rating,setRating] = useState(0);
    const [loading,setLoading] = useState(false);
    const [reviewsLoading,setReviewsLoading] = useState(false);
    const [form,setForm] = useState("");
const [data,setData] = useState([]);
    const sendReview = async () => {
        setLoading(true);
           try{
            await addDoc(reviewsRef,{
                movieid:id,
                name:"Rajnesh Yadav",
                rating: rating,
                thought:form,
                timestamp: new Date().getTime(),
            })
            const ref = doc(db, "movies", id);
            await updateDoc(ref,{
                   rating: prevRating + rating,
                   rated: userRated + 1,
            })
            setRating(0);
            setForm("");
            swal({
                title: 'Review Sent',
                icon: "success",
                buttons: false,
                timer: 2000
            })
           }catch(error){
            swal({
                title: error.message ,
                icon: "error",
                buttons: false,
                timer: 2000
            })
           }
           setLoading(false);
    }
    useEffect(()=>{
        async function getData(){
              setReviewsLoading(true);
              let quer = query(reviewsRef, where('movieid','==',id))
              const querySanapshot = await getDocs(quer);
              querySanapshot.forEach((doc)=>{
                   setData((prev)=>[...prev,doc.data()])
              })
              setReviewsLoading(false);
        }
        getData();
    },[]);
  return (
    <div className='mt-4 border-t-2 border-gray-600 w-full'>
        Reviews 
        <br />
        <ReactStars
            size={28}
            value={rating}
            onChange={(rate)=>setRating(rate)}
        />
        <input
            value={form}
            onChange={(e)=>setForm(e.target.value)}
            type="text" 
            className='mt-2 p-2  w-full outline-none bg-slate-900 '
            placeholder='Share Your thoughts...'
        />
        <button onClick={sendReview} className='mt-2 bg-green-500 p-1 w-full flex justify-center'>{ loading ? <TailSpin height={25} color='white'/>: 'Share'}</button>
        {
            reviewsLoading ? <div className='mt-7 flex justify-center '><ThreeDots height={13} color='white'/></div> 
            : 
            <div className='mt-5'>
                {
                    data.map((e,i)=>{
                        return(
                            <div key={i} className=' bg-gray-950 p-2 w-full mt-2 border-b border-gray-700'>
                                <div className='flex items-center'> 
                                  <p className='text-blue-600 font-bold'>{e.name}</p>
                                  <p className='ml-4 text-xs'>({new Date(e.timestamp).toLocaleString()})</p>
                                </div>
                                <ReactStars
                                    size={15}
                                    value={e.rating}
                                    edit={false}
                                />
                                <p>{e.thought}</p>
                            </div>
                        )
                    })
                }
            </div>
        }
    </div>
  )
}

export default Reviews;
