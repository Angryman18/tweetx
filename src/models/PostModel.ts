import { model, models, Schema } from "mongoose";

const PostModel = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: "User", require: true },
  createdOn: { type: Date, require: true },
  postContent: { type: String, require: true },
});

const Post = models.Post || model("Post", PostModel);

export default Post;
