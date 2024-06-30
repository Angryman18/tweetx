import { ProfileTabs } from "@/types/const";
import Post from "../Post/Post";
import UserPageCard from "../Users/UserPageCard";
import useFetchPosts from "@/hooks/Posts/useFetchPosts";
import useGetUserFollowers from "@/hooks/Posts/useFetchUserFollwers";
import useFollowState from "@/hooks/Users/useFollowState";
import useGetUserFollowing from "@/hooks/Profile/useGetUserFollowing";
import Loading from "../Loading/Loading";

export const PostTab = () => {
  const { posts, loading } = useFetchPosts();

  return (
    <>
      <Loading isLoading={loading} />
      {!posts.length && !loading && (
        <div className='text-xs opacity-50 text-center'>You have not posted anything yet.</div>
      )}
      {posts.map((item, _idx) => {
        return <Post post={item} key={_idx} />;
      })}
    </>
  );
};

export const FollowerSection = () => {
  const { followers, setFollowers, loading } = useGetUserFollowers();
  const callback = useFollowState();

  return (
    <div>
      <Loading isLoading={loading} />
      {!followers.length && !loading && (
        <div className='text-xs opacity-50 text-center'>You donot have any Follower.</div>
      )}
      {followers.map((item, _idx) => {
        return (
          <UserPageCard
            key={_idx}
            showDivider={false}
            callback={callback(followers, setFollowers)}
            followCount={item.followersCount!}
            name={item.fullname}
            id={item.id}
            isFollowing={item.isFollowing}
          />
        );
      })}
    </div>
  );
};

export const FollowingSection = () => {
  const { followings, loading } = useGetUserFollowing();
  return (
    <div>
      <Loading isLoading={loading} />
      {!followings.length && !loading && (
        <div className='text-xs opacity-50 text-center'>You are not following anyone yet.</div>
      )}

      {followings.map((item, _idx) => {
        return (
          <UserPageCard
            key={_idx}
            id={item.id}
            showBasic={true}
            showDivider={false}
            isFollowing={true}
            name={item.fullname}
            followCount={item.followersCount!}
          />
        );
      })}
    </div>
  );
};
