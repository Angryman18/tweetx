import React from "react";
import style from "./style.module.css";
import { ProfileTabs } from "@/types/const";

type TProps = {
  tab: ProfileTabs;
  handleTabChange: (tab: ProfileTabs) => void;
};

const ProfileBar = ({ tab, handleTabChange }: TProps) => {
  const isPostTab = tab === ProfileTabs.Post;
  const isFollowerTab = tab === ProfileTabs.Follower;
  const isFollowingTab = tab === ProfileTabs.Following;

  // const handleTabChange = (tab: ProfileTabs) => {};

  return (
    <div className='mt-16 relative'>
      <div className='flex justify-around h-12 items-end'>
        <div
          className={`${
            isPostTab ? style.select_item : style.parent_item
          } relative cursor-pointer h-full flex w-24`}
          onClick={handleTabChange.bind(null, ProfileTabs.Post)}
        >
          <div
            className={`${style.before_border} select-none font-bold w-full text-center opacity-50 mt-auto`}
          >
            Post
          </div>
        </div>
        <div
          className={`${
            isFollowerTab ? style.select_item : style.parent_item
          } relative cursor-pointer h-full flex w-24`}
          onClick={handleTabChange.bind(null, ProfileTabs.Follower)}
        >
          <div
            className={`${style.before_border} select-none font-bold w-full text-center opacity-50 mt-auto`}
          >
            Followers
          </div>
        </div>
        <div
          className={`${
            isFollowingTab ? style.select_item : style.parent_item
          } relative cursor-pointer h-full flex w-24`}
          onClick={handleTabChange.bind(null, ProfileTabs.Following)}
        >
          <div
            className={`${style.before_border} select-none font-bold w-full text-center opacity-50 mt-auto`}
          >
            Following
          </div>
        </div>
      </div>
      <div className='absolute h-[2px] w-full bg-LightShadow -top-0 -z-1 opacity-30'></div>
    </div>
  );
};

export default ProfileBar;
