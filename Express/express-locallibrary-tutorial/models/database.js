const mongoose = require('mongoose');
// remove warnings for Mongoose 7
mongoose.set('strictQuery', false);
// define the database URL and connect to it
// local instance
const mongoDB = 'mongodb://127.0.0.1/my_database';
// wait for the database to connect
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}



