import express from 'express';
const cors = require('cors');
import mongoose from 'mongoose';
const app = express();

// const corsOptions = {
//   origin: 'http://localhost:3000',  // Adjust to your frontend URL
//   methods: 'GET,POST,PUT,DELETE',
//   allowedHeaders: 'Content-Type,Authorization'
// };

// app.use(cors(corsOptions));

// Enable CORS for all origins (You can restrict this to specific origins if needed)
app.use(cors());

// Other middlewares and routes
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mediascore';
mongoose.connect(mongoURI).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch((err: Error) => {
  console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err)
  process.exit();
})

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Define a simple schema and model
const schema = new mongoose.Schema({
  name: String,
  description: String,
});

const Item = mongoose.model('Item', schema);

// Sample route to create an item
app.post('/api/items', async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Sample route to get all items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});