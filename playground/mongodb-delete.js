const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected to MongoDB server.')

  // deletemany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteone
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });


  // findanddelete
 // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
 //   console.log(result);
 // })

 db.collection('Users').deleteMany({name: 'Stig Nervik'}).then((result) => {
    console.log(result);
 });

 db.collection('Users').findOneAndDelete({
   _id: new ObjectID('5ab2b6317329b018db7f32a1')
 }).then((result) => {
    console.log(JSON.stringify(result,undefined,2));
 });




});
