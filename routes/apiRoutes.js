var express = require("express");
var app = express.Router();
var table = require("../data/tableData.js");
var waitlist = require("../data/waitinglistData.js");

app.post("/add", function(req, res) {
  
    var newReservation = req.body;
  

    // newReservation.routeName = newReservation.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);

    res.json(newReservation);
    if(table.tableArray.length > 5){
      waitlist.waitlistArray.push(newReservation);
    }else{
      table.tableArray.push(newReservation);
    }
  });

app.get("/tablelink", function(req,res){
      return res.json(table.tableArray);
})
  app.get("/waitlist", function(req,res){
    return res.json( waitlist.waitlistArray);
})


module.exports = app;

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// ===============================================================================
// ROUTING
// ===============================================================================

// API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

// API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware

    // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

      // Empty out the arrays of data
