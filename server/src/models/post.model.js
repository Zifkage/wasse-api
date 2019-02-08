import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "The 'title' field is required"],
  },
  body: {
    type: String,
    required: [true, "The 'body' field is required"],
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
});

export default mongoose.model('Post', PostSchema);
