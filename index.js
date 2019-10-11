const express = require('express');

const app = express();
const port = '1113';

// import routes
const authRoute = require('./routes/auth');

// middleware
app.use('/api/user', authRoute);

app.listen(port, () => console.log(`listening on port ${port}`));
