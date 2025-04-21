import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  telephone: String,
  role: { type: String, enum: ['Admin', 'User'], default: 'User' },
  password: String
});

const User = mongoose.model('User', userSchema);
export default User;
