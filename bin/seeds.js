const mongoose = require("mongoose")
const Celebrity = require("../models/Celebrity.model")


mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

  celebrities = [
    {
        name: "Brad Pitt",
        occupation: "Actor",
        catchPhrase: "I like lasagna"
    },
    {
        name: "Angelina Jolie",
        occupation: "Actress",
        catchPhrase: "I got your money Brat, loser haha"
    },
    {
        name: "Jimmy Fallon",
        occupation: "TV Show host",
        catchPhrase: "I dont like lasagna. You stupid Brad!"
    }
]

mongoose.connection.once("connected", () => {
    mongoose.connection.db.dropDatabase()
    .then(() => {
        console.log("Database cleared");
        return Celebrity.insertMany(celebrities)
    })
    .then((celebritiesCreated) => {
        console.log(`${celebritiesCreated.length} celebrities have been created`)
    })
    .catch((e) => {
        console.log(e)
    })
    .finally(() => {
        mongoose.connection.close()
    })
    .then(() => {
        console.log("finnished seeds.js")
    })
    .catch((e) => {
        console.log(e)
    })
    .finally(() => {
        process.exit(0)
    })
})