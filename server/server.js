const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'test') {
  connectDB();
  app.listen(PORT, () => console.log(`[PulseOps Server] running on port ${PORT}`));
}

module.exports = app;
