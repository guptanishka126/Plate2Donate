const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // ✅ FIXED: Correct mongoose import
const { mongourl } = require('./key'); // Ensure this is updated in key.js
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection Setup
mongoose.connect(mongourl).then(() => console.log('✅ MongoDB Connected Successfully'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err.message));

// ✅ Import DB Schemas
require('./Database/head');
require('./Database/donor');
require('./Database/volunteer');
require('./Database/event');

// ✅ API Routes
app.use(require('./routes/auth'));
app.use(require('./routes/activity'));

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
