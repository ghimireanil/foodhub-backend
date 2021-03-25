const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

dotenv.config();
//import routes
const authRoute = require('./routes/users');
const restaurantRoute = require('./routes/restaurants');

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  () => console.log('Connected to DB')
);

//Middlewares
app.use(express.json());

//Route middlewares
app.use('/auth', authRoute);
app.use('/restaurants', restaurantRoute);

const PORT = 3000 || env.PORT;
app.listen(PORT, () => console.log(`Server is listning on port ${PORT}...`));
