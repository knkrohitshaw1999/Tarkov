const mongoose = require('mongoose');

async function printSubscribers() {
  const uri = 'mongodb+srv://tarkovdb:tarkov123@cluster0.fhdb8cc.mongodb.net/tarkov';
  await mongoose.connect(uri);
  const subs = await mongoose.connection.db.collection('subscribers').find().toArray();
  console.log('Subscribers in tarkov DB:', subs);
  await mongoose.disconnect();
}
printSubscribers().catch(console.error);
