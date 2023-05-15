import React, { useState } from 'react';
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


function Testimonial(props) {
    const reviews = props.reviews;

    const [index, setIndex] = useState(0);
    const length = reviews.length;

    function leftShiftHandler() {
        if (index-1 < 0) {
            setIndex(length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }
    function rightShiftHandler() {
        if (index+1 > length-1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
        console.log(index);
    }
    function surpriseHandler() {
        setIndex(Math.floor(Math.random() * length));
    }
    return (
      <div className=" w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
        <Card review={reviews[index]}></Card>
        <div className="flex text-3xl mt-8 gap-3 text-violet-400 font-bold mx-auto mb-6">
          <button
            onClick={leftShiftHandler}
            className="hover:text-violet-500 cursor-pointer"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={rightShiftHandler}
            className="hover:text-violet-500 cursor-pointer"
          >
            <FiChevronRight />
          </button>
        </div>
        <div className="mx-auto">
          <button
            onClick={surpriseHandler}
            className="text-white bg-violet-400 transition-all duration-200 px-10 py-2 rounded-md font-bold text-lg cursor-pointer hover:bg-violet-500"
          >
            Surprise Me
          </button>
        </div>
      </div>
    );
}

export default Testimonial;