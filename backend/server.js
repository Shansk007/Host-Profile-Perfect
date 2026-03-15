const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
