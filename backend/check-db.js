const mongoose = require('mongoose');

async function checkDatabases() {
  const uri = 'mongodb+srv://tarkovdb:tarkov123@cluster0.fhdb8cc.mongodb.net/tarkov';
  await mongoose.connect(uri);
  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log('Collections in tarkov:', collections.map(c => c.name));
  await mongoose.disconnect();
}
checkDatabases().catch(console.error);
