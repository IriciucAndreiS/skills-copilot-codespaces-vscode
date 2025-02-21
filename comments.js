// Create web server and serve static files
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Store comments in an array
let comments = [];

// Read comments from file
fs.readFile('comments.json', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    comments = JSON.parse(data);
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON
app .use(express.json());

