const express = require("express");
const app = express();
const mongoose = require("mongoose");
const orderController = require("./user/routes/order");
const inventoryController = require("./user/routes/inventory");
const customerController = require("./user/routes/customer");



//server
app.listen(3001, (err)=> {
    if(!err) {
        console.log("Server started at port 3001")
    } else {
        console.log(err);
    }
});

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Database co
mongoose
  .connect(
    "mongodb+srv://Deepak:Deepak@ecommerce.z3nu9jf.mongodb.net/api_web_tech_assignment?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`Database is connected to mongo atlas`);
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res)=> {
    res.send("Ecommerce Backend")
});

//middleware
app.use("/order", orderController);
app.use("/inventory", inventoryController);
app.use("/customer", customerController)