app.get("/users", (req, res) => {
  const id = req.query.id; 
  db.query("SELECT * FROM users WHERE id = " + id); // vulnerable
});
