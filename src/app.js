require('dotenv').config();
const express = require('express');
const usersRoutes = require('./routes/users.routes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Dia 6 - Ivan', status: 'ok' });
});

app.get('/health', (req, res) => {
  res.json({ uptime: process.uptime(), timestamp: new Date() });
});

app.use('/api/users', usersRoutes);

module.exports = app;
