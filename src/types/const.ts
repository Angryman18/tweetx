export enum TButton {
  Normal,
  Classic,
}

export enum ProfileTabs {
  Post,
  Follower,
  Following
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
