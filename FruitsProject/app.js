//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please chec your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  score: 6,
  review: "Decent fruit"
})

mango.save();

Person.updateOne({name: "Amy"}, {favouriteFruit: mango}, (err) => {
  if(err) {
      console.log(err);
    } else {
      console.log("Succesfully updated the document!");
    }
})

// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });
//
// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit!"
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me!"
});

const banana = new Fruit({
  name: "Banana",
  score: 10,
  review: "Weird texture!"
});

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved alll the fruits to fruitsDB")
//   }
// });

  Fruit.find((err, fruits) => {
    if(err) {
      console.log(err);
    } else {
      mongoose.connection.close();
        fruits.forEach((fruit)=>{
          console.log(fruit.name);
        });
    }
  });

  // Fruit.updateOne({_id: "5dada48688d55532b80e93ca"}, {name: "Peach"}, (err) => {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     console.log("Succesfully updated the document!");
  //   }
  // });

  // Fruit.deleteOne({name: "Peach"}, (err) => {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     console.log("Succesfully deleted the document!");
  //   }
  // });

  Person.deleteMany({name: "Alex"}, (err) => {
    if(err) {
        console.log(err);
      } else {
        console.log("Succesfully deleted all the document!");
      }
  });
