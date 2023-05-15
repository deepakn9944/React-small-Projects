import React, { useEffect, useState } from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {

  // const [gif, setGif] = useState('');
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData()
  // },[] )
  

  const { gif, loading, fetchData } = useGif(false);



  return (
    <div className="w-1/2 bg-green-400 mt-[15px] flex flex-col items-center rounded-lg gap-y-5">
      <h1 className="mt-[15px] text-2xl uppercase font-bold underline">
        A Random Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width={450}></img>} 

      <button
        className="bg-white w-10/12 mb-[20px] rounded-lg py-2 px-3 text-xl"
        onClick={() => {fetchData();}}
      >
        Generate
      </button>
    </div>
  );
}

export default Random;