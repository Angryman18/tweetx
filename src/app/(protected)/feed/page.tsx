import Button from "@/components/Button/Button";
import Post from "@/components/Post/Post";
import { TButton } from "@/types/const";
import React from "react";

const Feed = () => {
  return (
    <div>
      <Button bType={TButton.Classic} text='Write' />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
