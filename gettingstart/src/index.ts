import { db, getCities } from "./firebase.app";

const ret = getCities(db);

getCities(db)
  .then((v) => {
    console.log(v);
  })
  .catch((err) => {
    console.log(err);
  });
