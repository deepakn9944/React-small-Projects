import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Card from "./Card";

export const Blogs = () => {

  const { loading, posts } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] my-auto items-center justify-center" style={{height : loading ? '100vh' : 'auto'}}>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => <Card post={post} key={post.id}></Card>)
      )}
    </div>
  );
}
