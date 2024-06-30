"use client";
import React, { useState } from "react";
import ProfileBar from "./ProfileBar";
import { FollowerSection, FollowingSection, PostTab } from "./Tabs";
import { ProfileTabs } from "@/types/const";
import useUserProfile from "@/hooks/Users/useUserProfile";
import Loading from "../Loading/Loading";

const Tabs = {
  [ProfileTabs.Post]: PostTab,
  [ProfileTabs.Follower]: FollowerSection,
  [ProfileTabs.Following]: FollowingSection,
};

const ProfileMain = () => {
  const [tab, setTab] = useState(ProfileTabs.Post);
  const TabComp = Tabs[tab];
  const { user, loading } = useUserProfile();
  
  if (loading) return <Loading isLoading={loading} />;
  return (
    <div>
      <div className='flex items-center space-x-16 mt-8'>
        <div className='rounded-full w-24 h-24 border border-MediumGray border-opacity-50'></div>
        <div className=''>
          <div className='text-3xl text-LightShadow text-opacity-90 font-semibold'>
            {user?.fullname}
          </div>
        </div>
      </div>
      <div className='text-LightShadow text-opacity-50 flex space-x-10 text-sm ml-40'>
        <div>Posts : {user?.postCount}</div>
        <div>Follows : {user?.followersCount}</div>
        <div>Following : {user?.followingCount}</div>
      </div>
      <ProfileBar tab={tab} handleTabChange={setTab} />
      <div className='mt-16'>
        <TabComp />
      </div>
    </div>
  );
};

export default ProfileMain;
