

app.post("/", function(req, res) {
  
    var newReservation = req.body;
  

    newReservation.routeName = newReservation.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    tableArray.push(newReservation);
  
    res.json(newReservation);
  });