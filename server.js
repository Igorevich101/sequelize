const express = require('express');
const router = require('./routers');
const bacisErrorHandler = require('./middlewares/error')
const app = express();

app.use(express.json());
app.use(router);

app.use(bacisErrorHandler);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
