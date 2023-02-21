import mongoose from "mongoose";
const connectDB = (url) => {
    mongoose.set('strictQuery' ,true);

    mongoose.connect(url)
    .then(()=>console.log('Database is connected'))
    .catch((err)=>console.log(err));
}
export default connectDB;