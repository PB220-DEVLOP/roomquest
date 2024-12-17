const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, 'database');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true }); // Ensure directory exists
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// Endpoint to handle file uploads
app.post('/database', upload.single('profilePicture'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const filePath = `/database/${req.file.filename}`;
        res.json({ message: 'File uploaded successfully', filePath });
    } catch (error) {
        res.status(500).json({ error: 'File upload failed', details: error.message });
    }
});

// Serve uploaded files statically
app.use('/database', express.static(path.join(__dirname, 'database')));

// Example endpoint
app.get('/', (req, res) => {
    res.send('Backend server is running');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
