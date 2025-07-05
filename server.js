const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());
dotenv.config();
// Connect database
mongoose.connect(process.env.mongodb_url)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.use('/api/users', userRoutes);

app.get( '/',function(req,res) {
  res.send('<h1>Hello</h1>')
})
app.listen(3000, '0.0.0.0', () => {
  console.log('Server running at http://localhost:3000');
});