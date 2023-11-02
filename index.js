// Aquiring express web framework in the file
const express = require("express");
const app = express();
// Using express router
app.use("/", require("./routes"));

// Defining the port on which the website will run
const port = 8000;

app.listen(port, function (err) {
  // In printing we have used back tick and interpolation in order to print
  if (err) {
    console.log(`Error in running the Server : ${err}`);
  }
  console.log(`Server is running in port : ${port}`);
});
