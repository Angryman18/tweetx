export enum TButton {
  Normal,
  Classic,
  OutlinedClassic,
}

export enum ProfileTabs {
  Post,
  Follower,
  Following,
}

export type CustomError = {
  error: string;
};

export type TResp = {
  fullname: string;
  avatar: string;
  token: string;
  email: string;
};

export type TPost = { postContent: string; createdBy: { fullname: string }; createdOn: string };

export type TUserProfile = {
  id: string;
  fullname: string;
  followingCount: number;
  isFollowing: boolean;
};
