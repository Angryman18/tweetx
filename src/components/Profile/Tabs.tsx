import { ProfileTabs } from "@/types/const";
import Post from "../Post/Post";
import UserPageCard from "../Users/UserPageCard";

type CTab = { tab: ProfileTabs };

export const PostSection = ({ tab }: CTab) => {
  return (
    <>
      <Post
        post={{
          postContent: "",
          createdBy: { fullname: "Shyam Mahanta" },
          createdOn: new Date().toISOString(),
        }}
      />
      <Post
        post={{
          postContent: "",
          createdBy: { fullname: "Shyam Mahanta" },
          createdOn: new Date().toISOString(),
        }}
      />
      <Post
        post={{
          postContent: "",
          createdBy: { fullname: "Shyam Mahanta" },
          createdOn: new Date().toISOString(),
        }}
      />
    </>
  );
};

export const FollowerSection = ({ tab }: CTab) => {
  return (
    <div>
      <UserPageCard followCount={100} isFollowing={true} name='Axar Patel' showDivider={false} />
      <UserPageCard followCount={200} isFollowing={true} name='Rohit Sharma' showDivider={false} />
      <UserPageCard followCount={300} isFollowing={true} name='Virat Kohli' showDivider={false} />
    </div>
  );
};

export const FollowingSection = ({ tab }: CTab) => {
  return (
    <div>
      <UserPageCard followCount={100} isFollowing={false} name='Axar Patel' showDivider={false} />
      <UserPageCard followCount={100} isFollowing={true} name='Rohit Sharma' showDivider={false} />
      <UserPageCard followCount={100} isFollowing={false} name='Virat Kohli' showDivider={false} />
    </div>
  );
};
