const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

// connect to db based on environment
module.exports.connectDB = async () => {
  if (process.env.NODE_ENV === "development") {
    mongoose.connect("mongodb+srv://Babajide:Maythird1.!@cluster0.azxmr.mongodb.net/swift-jet-staging-db?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
 console.log("staging db connected");
  } else if (process.env.NODE_ENV === "production") {
    mongoose.connect("mongodb+srv://Babajide:Maythird1.!@cluster0.azxmr.mongodb.net/swift-jet-staging-db?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("production db connected");
   
  } else {
    mongoose.connect("mongodb+srv://Babajide:Maythird1.!@cluster0.azxmr.mongodb.net/swift-jet-staging-db?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
  }
};

// Disconnect db
module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
};

// Remove all the data for all db collections.
module.exports.clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    collection.deleteMany();
  }
};
