import mongoose from 'mongoose';
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true } )
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("db connection successful");
});
