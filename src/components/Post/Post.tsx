import { TPost } from "@/types/const";
import { calculatePostTime } from "@/utils/fe-utils/commonUtil";
import React from "react";

type TProps = {
  post: TPost;
};

const Post = ({ post }: TProps) => {
  return (
    <div
      className='relative rounded-2xl my-4 p-6 overflow-x-hidden'
      style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" }}
    >
      <div className='flex justify-between items-end'>
        <div className='flex items-center space-x-4'>
          <div className='rounded-full w-12 h-12 border border-MediumGray border-opacity-50'></div>
          <div className='font-semibold text-MediumGray text-opacity-80'>
            {post.createdBy.fullname}
          </div>
        </div>
        <div className='text-xs mr-10 text-LightShadow text-opacity-50 select-none'>
          {calculatePostTime(post.createdOn)}
        </div>
      </div>
      <div className='rounded-full w-10 bg-Text h-10 absolute bottom-12 -right-4'></div>
      <div className='text-xs text-LightShadow text-opacity-50 mr-10 ml-16 py-2 text-justify'>
        {post.postContent}
      </div>
    </div>
  );
};

export default Post;
