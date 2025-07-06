import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to home!');
});

app.get('/about', (req, res) => {
    res.send('About us');
});

app.listen(3005, () => {
    console.log('Express server running on http://localhost:3005');
});
