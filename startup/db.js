const mongoose = require('mongoose');

module.exports = () => {
   // mongdb cloud connection is here
   
  mongoose
    .connect("mongodb+srv://deepakchattwaniking15:iWKpsTFEOcC7U0ew@cluster0.wfgfmoi.mongodb.net/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("connected to mongodb cloud! :)");
    })
    .catch((err) => {
      console.log("nahi hua yaar")
      console.log(err);
    }); 
};
