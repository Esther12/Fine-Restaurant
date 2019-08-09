// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================

// HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
  });
// If no matching route is found default to home
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });