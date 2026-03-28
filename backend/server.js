const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ API Route
app.post('/api/feedback', (req, res) => {
    const { name, email, feedback } = req.body;

    if (!name || !email || !feedback) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    console.log('New Feedback Received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback:', feedback);
    console.log('--------------------------');

    res.status(200).json({ message: 'Feedback received successfully' });
});

// ✅ Serve frontend (React/Vite build)
app.use(express.static(path.join(__dirname, '../dist')));

// ✅ Handle all routes (important for React routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// ✅ Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
