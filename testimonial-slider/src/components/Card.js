import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


function Card(props) {
    const review = props.review;
    console.log(review);
    
    return (
      <div className="flex flex-col md:relative">
        <div className="absolute top-[-7rem] z-[10] mx-auto">
          <img
            src={review.image}
            className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
          ></img>
          <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
        </div>
        <div className="text-center mt-7">
          <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>
        </div>
        <div className="text-center mt-1">
          <p className="text-sm uppercase text-violet-300">{review.job}</p>
        </div>
        <div className="text-violet-400 mx-auto mt-7">
          <FaQuoteLeft />
        </div>
        <div className="text-center mt-4 text-slate-500">
          <p>{review.text}</p>
        </div>
        <div className="text-violet-400 mx-auto mt-5">
          <FaQuoteRight />
        </div>
        
      </div>
    );
}

export default Card