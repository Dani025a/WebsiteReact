const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const mongoUrl =
"mongodb+srv://adarsh:adarsh@clustero.zllye.mongodb.net/?retrywrites=true&w=majority";
mongoose
.connect (mongourl, {
useNewUrlParser: true,
})
.then(() => {
console.log("Connected to database");
})
.catch((e) => console.log(e));
app.post("/signup", async(req,res)=>{
})
app.listen (5000, () => {
console.log("Server Started");
});