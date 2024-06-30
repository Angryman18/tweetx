"use client";
import Button from "@/components/Button/Button";
import Post from "@/components/Post/Post";
import { TButton } from "@/types/const";
import React, { useEffect, useState } from "react";
import WritePost from "@/components/Post/WritePost";
import useFetchFeeds from "@/hooks/Posts/useFetchFeeds";
import Loading from "@/components/Loading/Loading";

const Feed = () => {
  const [showModal, setShowModal] = useState(false);
  const { fetchPosts, loading, posts } = useFetchFeeds();

  return (
    <>
      <WritePost fetchPosts={fetchPosts} showModal={showModal} setShowModal={setShowModal} />
      <div>
        <Button onClick={() => setShowModal(true)} bType={TButton.Classic} text='Write' />
        <Loading isLoading={loading} />
        {!posts.length && !loading && (
          <div className='text-sm text-center text-LightShadow text-opacity-50'>
            <hr className='my-4 mt-6 border-opacity-30 border-LightShadow' />
            No New Post Found
          </div>
        )}
        {posts.map((item) => {
          return <Post key={Math.random()} post={item} />;
        })}
      </div>
    </>
  );
};

export default Feed;
