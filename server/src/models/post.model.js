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
<<<<<<< HEAD
  createdAt: {
=======
  createAt: {
>>>>>>> 57027e449c3a98c8f1c9dd85d1e1aa571f9fd12d
    type: Number,
    default: Date.now,
  },
});

export default mongoose.model('Post', PostSchema);
