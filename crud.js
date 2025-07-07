import express from 'express';
const app = express();

const items = []; // דוגמה ל-"DB" בזיכרון

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


// חלק 2: מימוש CRUD בסיסי

// GET - שליפת כל הפריטים:

app.get('/items', (req, res) => {
  res.end(JSON.stringify(items));
});


// POST - הוספת פריט:

app.post('/items', (req, res) => {
  const newItem = req.body.name;
  if (!newItem) return res.status(400).send('Name is required');
  items.push(newItem);
  res.writeHead(200, {"content-type": "application/json"})
  res.end(JSON.stringify({ message: 'Item added', items }));
});


// PUT - עדכון פריט לפי אינדקס:

app.put('/items/:index', (req, res) => {
  
});





// DELETE - מחיקת פריט:

app.delete('/items/:index', (req, res) => {
  
});
