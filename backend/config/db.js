import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vmkutyukelwa:VUyi2314&@cluster-0.8rb3xr7.mongodb.net/grab-a-snack').then(()=>console.log("Database is Connected"));
}