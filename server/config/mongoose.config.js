const mongoose = require("mongoose");
mongoose.connect(
'mongodb://localhost/product_manager'
, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
    .then(()=>console.log("💻 Mondodb Connected"))
    .catch(err=>console.log("Something went wrong when connecting to the database",err));
