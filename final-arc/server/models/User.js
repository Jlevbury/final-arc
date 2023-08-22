const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "A username is required!"],
    unique: [true, "{VALUE} already in use!"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "An email address is required!"],
    unique: [true, "{VALUE} already in use!"],
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Must be an email address!"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "A password is required!"],
    minlength: [8, "Password must be at least 8 characters!"],
    match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Must have one lowercase, one uppercase, one number, and one special character!"],
  },
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 12;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;