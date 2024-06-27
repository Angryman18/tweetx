"use client";
import React, { useState } from "react";
import ProfileBar from "./ProfileBar";
import { FollowerSection, FollowingSection, PostSection } from "./Tabs";
import { ProfileTabs } from "@/types/const";

const Tabs = {
  [ProfileTabs.Post]: PostSection,
  [ProfileTabs.Follower]: FollowerSection,
  [ProfileTabs.Following]: FollowingSection,
};

const ProfileMain = () => {
  const [tab, setTab] = useState(ProfileTabs.Post);
  const TabComp = Tabs[tab];

  return (
    <div>
      <div className='flex items-center space-x-16 mt-8'>
        <div className='rounded-full w-24 h-24 border border-MediumGray border-opacity-50'></div>
        <div className=''>
          <div className='text-3xl text-LightShadow text-opacity-90 font-semibold'>
            Shyam Mahanta
          </div>
        </div>
      </div>
      <div className='text-LightShadow text-opacity-50 flex space-x-10 text-sm ml-40'>
        <div>Posts : 522</div>
        <div>Follows : 645</div>
        <div>Following : 1152</div>
      </div>
      <ProfileBar tab={tab} handleTabChange={setTab} />
      <div className='mt-16'>
        <TabComp tab={tab} />
      </div>
    </div>
  );
};

export default ProfileMain;
