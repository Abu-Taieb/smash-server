const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


app.get('/', (req, res) => {
    res.send('Server is Running')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})