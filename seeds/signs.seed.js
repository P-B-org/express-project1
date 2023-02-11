require("../config/db.config");

const mongoose = require("mongoose");
const Sign = require("../models/Sign.model");

const signs = require("../signs.json");
const compatibilities = require("../compatibility.json");

mongoose.connection.once("open", () => {
  console.info(
    `*** Connected to the database ${mongoose.connection.db.databaseName} ***`
  );

  mongoose.connection.db
    .dropDatabase()
    .then(() => {
      console.info("Db has been cleared");

      return Sign.create(signs);
    })
    .then(createdSigns => {
      const mappedCompatibilities = compatibilities.map((compatibility) => {
        return {
          ...compatibility,
          sign: compatibility.signs.map(
            (sign) =>
              createdSigns.find((createdSign) => createdSign.name === sign).id
          ),
        };
        //return Compatibility.create(mappedCompatibilities)
      });
    })
    // .then(createdCompatibilities => {
    //     console.log('compabilities')
    // })
    .catch((err) => console.error(err))
    .finally(() => {
      mongoose.connection.close(function () {
        console.log("Mongoose disconnected");
        process.exit(0);
      });
    });
});
