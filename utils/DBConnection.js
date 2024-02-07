import mongoose from 'mongoose';

// connecting to database
const DBconnection = async () => {
    const connectionUrl = "mongodb://localhost:27017/?authSource=gdhrebuild";
    mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`Database connected successfully`))
        .catch((err) => console.log("Getting Error from DB connection" + err.message))
    mongoose.set('strictQuery', false);
};

export default DBconnection;