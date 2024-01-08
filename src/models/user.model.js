import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: [true, "name is required"],
      lowercase: true,
    },
    avatar: {
      type: String, // cloudinary
      required: true,
    },
    coverImage: {
      type: String, // cloudinary
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
