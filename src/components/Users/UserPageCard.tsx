import React from "react";
import Button from "../Button/Button";
import { TButton } from "@/types/const";

const UserPageCard = ({
  name,
  followCount,
  isFollowing,
  showDivider = true,
}: {
  name: string;
  followCount: number;
  isFollowing: boolean;
  showDivider?: boolean;
}) => {
  return (
    <div className='lg:w-auto w-[500px]'>
      <div className='flex items-center space-x-10 py-8 mx-12'>
        <div className='w-12 h-12 rounded-full border border-MediumGray border-opacity-50'></div>
        <div>
          <div className='text-[17px] text-LightShadow'>{name}</div>
          <div className='text-xs text-LightShadow text-opacity-50 select-none'>
            Following : {followCount}
          </div>
        </div>
        <div className='flex-1 flex justify-end'>
          {isFollowing ? (
            <div className='text-sm font-semibold opacity-50 text-center mr-6'>Following</div>
          ) : (
            <Button className='ml-auto' bType={TButton.Classic} text='Follow' />
          )}
        </div>
      </div>
      {showDivider && <hr className='opacity-15' />}
    </div>
  );
};

export default UserPageCard;
