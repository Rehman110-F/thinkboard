
import mongoose from "mongoose"
export const connectDB  = async () => {
   try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Db connected Succesfully.");
   } catch (error) {
    
    console.error("Error in MongoDb Connection.",error);
    process.exit(1)   // exit due to failure.   and 0 means succesfull.
   }
};