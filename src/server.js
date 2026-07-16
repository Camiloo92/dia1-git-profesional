require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'backend Dia 5 vivo - Ivan', 
    status: 'ok', 
    env: process.env.NODE_ENV || 'development' 
  });
});

app.get('/health', (req, res) => {
  res.json({ uptime: process.uptime(), timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log('Server running en http://localhost:' + PORT);
});
