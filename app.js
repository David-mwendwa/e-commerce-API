const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

//start server
(async () => {
  try {
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
})();
