import { Model, model, models, Schema } from "mongoose";

export type TUser = {
  fullname: string;
  email: string;
  password: string;
  avatar?: string;
  hash?: string;
};

const UserModel = new Schema<TUser>({
  fullname: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  avatar: { type: String, require: false, default: "" },
  hash: { type: String, require: true },
});

// const CreateUserModel = model("User", UserModel);
const User = models.User || model("User", UserModel)

export default User;
