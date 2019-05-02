import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, "The 'password' field is missing"]
  },
  username: { type: String, required: [true, "The 'name' field is missing"] },
  phone_number: {
    type: String,
    required: [true, "The 'contact' field is missing"]
  },
  createdAt: {
    type: Number,
    default: Date.now
  },
  updatedAt: Number
});

export default {
  model: mongoose.model('User', UserSchema),
  schema: UserSchema
};
