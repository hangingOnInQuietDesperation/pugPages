//   start.js
const app = require('./app');

const server = app.listen(3435, () => {
  console.log(`Express is running on port ${server.address().port}`);
});

