// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  
  username :{type : String ,required :true , unique : true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

export default mongoose.model("User", userSchema);
