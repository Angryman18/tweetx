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
  callback = () => {},
  showBasic = false,
}: {
  name: string;
  followCount: number;
  id: string;
  isFollowing: boolean;
  showDivider?: boolean;
  callback?: (val: boolean, id: string) => void;
  showBasic?: boolean;
}) => {
  const followUnFollow = useFollow();
  const { userData } = useStore();
  const isNotCurrentUser = userData?.data._id !== id;

  const handleFollowUnFollowClick = async (toFollow: boolean, id: string) => {
    try {
      callback(toFollow, id); // make the follow first
      await followUnFollow(toFollow, id); // call the api
    } catch (err) {
      callback(!toFollow, id); // revert back if api fails
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
            <div className='text-sm font-semibold select-none text-center mr-8 rounded-xl bg-Text px-2 text-[#fff]'>
              You
            </div>
          ) : isFollowing ? (
            <div
              onClick={
                !showBasic
                  ? handleFollowUnFollowClick.bind(null, false, id)
                  : ((() => ({})) as React.MouseEventHandler)
              }
              className={`text-sm hover:border-LightShadow ${
                !showBasic && "hover:border hover:px-4 hover:rounded-xl cursor-pointer"
              } duration-100 font-semibold opacity-50 text-center w-24`}
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
