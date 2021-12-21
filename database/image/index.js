import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  images: [
    {
      location: {type: String, required: true}
    }
  ]
},
{
  timestamps: true  //order done time
});

export const ImageModel = mongoose.model("Images",ImageSchema);
