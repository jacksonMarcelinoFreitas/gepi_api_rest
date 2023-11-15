const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running ${PORT}`));




