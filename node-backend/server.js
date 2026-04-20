const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API route — calls JSONPlaceholder and returns to frontend
app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    res.json({
      success: true,
      source: 'jsonplaceholder.typicode.com',
      count: response.data.length,
      data: response.data
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch users' });
  }
});

// Health check — GitHub Actions uses this to verify deploy worked
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    version: 'v3.0 - Backend Pipeline Test!'
  });
});

// Serve Angular build files as static
app.use(express.static(path.join(__dirname, 'public')));

// Any other route → return Angular's index.html (for Angular routing)
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});