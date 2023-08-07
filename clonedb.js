const { MongoClient } = require('mongodb');

const sourceDbUri = 'mongodb+srv://Babajide:Maythird1.!@cluster0.azxmr.mongodb.net/swift-jet-staging-db?retryWrites=true&w=majority';
const destinationDbUri = 'mongodb+srv://Babajide:Maythird1.!@cluster0.azxmr.mongodb.net/swift-jet-production-db?retryWrites=true&w=majority';


async function duplicateDatabase() {
    try {
      // Connect to the source database
      const sourceClient = await MongoClient.connect(sourceDbUri);
      const sourceDb = sourceClient.db();
      const sourceCollectionNames = await sourceDb.listCollections().toArray();
  
      // Connect to the destination database
      const destinationClient = await MongoClient.connect(destinationDbUri);
      const destinationDb = destinationClient.db();
  
      // Loop through each collection in the source database
      for (const collectionNameObj of sourceCollectionNames) {
        const collectionName = collectionNameObj.name;
        const sourceCollection = sourceDb.collection(collectionName);
        const destinationCollection = destinationDb.collection(collectionName);
  
        // Read data from the source collection
        const data = await sourceCollection.find({}).toArray();
  
        // Insert data into the destination collection
        if (data.length > 0) {
          await destinationCollection.insertMany(data);
          console.log(`Successfully duplicated data from "${collectionName}"`);
        } else {
          console.log(`No data found in "${collectionName}"`);
        }
      }
  
      // Close the database connections
      sourceClient.close();
      destinationClient.close();
  
      console.log('Database duplication completed!');
    } catch (err) {
      console.error('Error duplicating the database:', err);
    }
  }
  
  duplicateDatabase();
  