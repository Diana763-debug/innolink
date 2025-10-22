
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

// ✅ Daftar pelajar
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  let users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

  const exists = users.find(u => u.username === username);
  if (exists) {
    return res.status(400).json({ message: 'Username sudah wujud!' });
  }

  users.push({ username, password });
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
  res.json({ message: 'Daftar berjaya!' });
});

// ✅ Login pelajar
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  let users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

  const found = users.find(u => u.username === username && u.password === password);
  if (found) {
    res.json({ message: 'Login berjaya!' });
  } else {
    res.status(401).json({ message: 'Nama pengguna atau kata laluan salah.' });
  }
});

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
