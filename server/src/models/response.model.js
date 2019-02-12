import mongoose, { Schema } from 'mongoose';

const ResponseSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
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
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: [true, 'The response must be bind to a post'],
  },
  solution: {
    type: Schema.Types.Boolean,
    default: false,
  },
});

export default mongoose.model('Response', ResponseSchema);
