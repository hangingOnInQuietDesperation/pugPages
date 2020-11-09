//   start.js
const app = require('./app');

//start listening on port 3435
const server = app.listen(3435, () => {
  console.log(`Express is running on port ${server.address().port}`);
});

