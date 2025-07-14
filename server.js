const express = require('express');
const app = express();

if (!process.env.APP_SECRET) {
  console.error('ERROR: APP_SECRET environment variable is required but not set.');
  process.exit(1);
}

app.get('/', (req, res) => {
  res.send('App is running!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
