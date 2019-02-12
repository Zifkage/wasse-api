import mongoose from 'mongoose';

const ResponseSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'The response must be bind to the author'],
  },
  body: {
    type: String,
    required: [true, "The 'body' field is required"],
  },
  createdAt: {
    type: Number,
    default: Date.now,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: [true, 'The response must be bind to a post'],
  },
  solution: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
});

export default mongoose.model('Response', ResponseSchema);
