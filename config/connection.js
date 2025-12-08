require("dotenv").config();
const { MongoClient } = require("mongodb");

const state = {
  db: null
};

module.exports.connect = function (done) {
  const url = process.env.MONGODB_URL;
  const dbname = process.env.DB_NAME;

  MongoClient.connect(url)
    .then((client) => {
      state.db = client.db(dbname);
      console.log("✅ Database connected successfully");
      done();
    })
    .catch((err) => {
      console.log("❌ Database connection failed:", err);
      done(err);
    });
};

module.exports.get = function () {
  return state.db;
};
