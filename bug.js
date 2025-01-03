const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data here...
  res.status(201).send('Data received');
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});