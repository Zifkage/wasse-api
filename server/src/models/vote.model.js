import mongoose from 'mongoose';
import User from './user.model';

const VoteSchema = new mongoose.Schema({
  author: {
    type: User.schema,
    required: [true, 'The vote must be bind to the author'],
  },
  type: {
    type: String,
    required: [true, "The 'title' field is required"],
  },
});

export default {
  model: mongoose.model('Vote', VoteSchema),
  schema: VoteSchema,
};
