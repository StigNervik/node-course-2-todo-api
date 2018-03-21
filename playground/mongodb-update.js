const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected to MongoDB server.')

 // db.collection('Todos').findOneAndUpdate({
 //   _id: new ObjectID('5ab2c4c32cbf77f919fb81bd')
 // }, {
 //   $set: {
 //     complete: true
 //   }
 // }, {
 //     returnOriginal: false
 //   }).then((result) => {
 //    console.log(result);
 // });


 db.collection('Users').findOneAndUpdate({
   _id: new ObjectID('5ab2b4f5d79bd21899c91a74')
 }, {
   $set: {
     name: 'Stig Nervik'
   },
   $inc: {
     age: 1
   }
 }, {
     returnOriginal: false
   }).then((result) => {
    console.log(result);
 });



});
