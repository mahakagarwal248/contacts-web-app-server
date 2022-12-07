import mongoose from "mongoose";

const sentMessages = mongoose.Schema({
  to: { type: String, default: "", required: true },
  name: { type: String, default: "", required: true },
  sendingTime: { type: Date, default: Date.now, required: true },
  message: { type: String, default: "", required: true },
  id: { type: String, default: "", required: true },
});

export default mongoose.model("sentMessages", sentMessages);
