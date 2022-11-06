const express = require('express');
const path = require('path');
const members = require('./Members');
const app = express();



// Gets All Members
app.get('/api/members', async(req, res) => {
    const user = await new customer(1);
    res.json(user);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));