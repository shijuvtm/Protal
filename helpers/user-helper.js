var db = require("../config/connection");
var collection = require("../config/collection");
const { ObjectId } = require("mongodb");

module.exports = {
  DataLog: (userData) => {
    return new Promise((resolve, reject) => {
      db.get()
        .collection(collection.USER_COLLECTION)
        .insertOne(userData)
        .then((data) => resolve(data.insertedId))
        .catch((err) => reject(err));
    });
  },
getAllData: () => {
  return new Promise((resolve, reject) => {
    db.get()
      .collection(collection.USER_COLLECTION)
      .find()
      .toArray()
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
};
