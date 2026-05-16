const mongoose = require('mongoose');

async function checkDatabases() {
  const uri1 = 'mongodb+srv://tarkovdb:tarkov123@cluster0.fhdb8cc.mongodb.net/tarkov';
  await mongoose.connect(uri1);
  const users1 = await mongoose.connection.db.collection('users').countDocuments();
  console.log('Users in tarkov:', users1);
  await mongoose.disconnect();

  const uri2 = 'mongodb+srv://tarkovdb:tarkov123@cluster0.fhdb8cc.mongodb.net/tarkov-Cluster0';
  await mongoose.connect(uri2);
  const users2 = await mongoose.connection.db.collection('users').countDocuments();
  console.log('Users in tarkov-Cluster0:', users2);
  await mongoose.disconnect();
}
checkDatabases().catch(console.error);
