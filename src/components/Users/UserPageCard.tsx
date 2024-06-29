import React from "react";
import Button from "../Button/Button";
import { TButton } from "@/types/const";
import useFollow from "@/hooks/Users/useFollow";
import { toastError } from "@/utils/fe-utils/toast";
import useStore from "@/hooks/useStore";

const UserPageCard = ({
  name,
  id,
  followCount,
  isFollowing,
  showDivider = true,
  callback,
}: {
  name: string;
  followCount: number;
  id: string;
  isFollowing: boolean;
  showDivider?: boolean;
  callback: (val: boolean, id: string) => void;
}) => {
  const followUnFollow = useFollow();
  const { userData } = useStore();
  const isNotCurrentUser = userData?.data._id !== id;

  const handleFollowUnFollowClick = async (toFollow: boolean, id: string) => {
    try {
      await followUnFollow(toFollow, id);
      callback(toFollow, id);
    } catch (err) {
      toastError(err as string);
    }
  };

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
          {!isNotCurrentUser ? (
            <div className='text-sm font-semibold select-none opacity-50 text-center mr-8 rounded-xl bg-Text px-2 text-[#fff]'>
              You
            </div>
          ) : isFollowing ? (
            <div
              onClick={handleFollowUnFollowClick.bind(null, false, id)}
              className='text-sm hover:border-LightShadow hover:border hover:px-4 hover:rounded-xl duration-100 font-semibold cursor-pointer opacity-50 text-center w-24'
            >
              Following
            </div>
          ) : (
            <Button
              onClick={handleFollowUnFollowClick.bind(null, true, id)}
              className='ml-auto'
              bType={TButton.Classic}
              text='Follow'
            />
          )}
        </div>
      </div>
      {showDivider && <hr className='opacity-15' />}
    </div>
  );
};

export default UserPageCard;
