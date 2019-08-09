var express = require("express");
var apiRoutes = require("./routes/apiRoutes");

var app = express();


var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/table", apiRoutes);

app.listen(PORT, function() {
console.log("App listening on PORT: " + PORT);
});
