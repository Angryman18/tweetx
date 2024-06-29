import { Model, model, models, Schema } from "mongoose";

export type TUser = {
  fullname: string;
  email: string;
  password: string;
  avatar?: string;
  hash?: string;
  followers: [Schema.Types.ObjectId];
  following: [Schema.Types.ObjectId];
  posts: [Schema.Types.ObjectId];
};

const UserModel = new Schema<TUser>({
  fullname: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  avatar: { type: String, require: false, default: "" },
  hash: { type: String, require: true },
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

UserModel.virtual("followersCount").get(function () {
  return this.followers.length;
});
UserModel.virtual("followingCount").get(function () {
  return this.following.length;
});
UserModel.virtual("postCount").get(function () {
  return this.posts.length;
});

UserModel.set("toJSON", { virtuals: true });
UserModel.set("toObject", { virtuals: true });
const User = models.User || model("User", UserModel);

export default User;
