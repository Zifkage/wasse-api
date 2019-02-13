import mongoose from 'mongoose';
import User from './user.model';
import Response from './response.model';

const PostSchema = new mongoose.Schema({
  author: {
    type: User.schema,
    required: [true, 'The post must be bind to the author'],
  },
  title: {
    type: String,
    trim: true,
    required: [true, "The 'title' field is required"],
  },
  body: {
    type: String,
    required: [true, "The 'body' field is required"],
  },
  responses: [Response.schema],
  createdAt: {
    type: Number,
    default: Date.now,
  },
});

export default mongoose.model('Post', PostSchema);
