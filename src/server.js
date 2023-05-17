const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 5000;

// MySQL bağlantısı
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL bağlantısı başarısız:', err);
  } else {
    console.log('MySQL bağlantısı başarıyla kuruldu.');
  }
});

// JSON verilerini işlemek için body-parser middleware'ı kullanın
app.use(bodyParser.json());

// Kullanıcı girişi için API rotası
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Kullanıcıyı veritabanında bulmaya çalışın
  const query = 'SELECT * FROM users WHERE ogrID = ? AND password = ?';
  connection.query(query, [username, password], (err, results) => {
    if (err || results.length === 0) {
      res.status(401).json({ message: 'Geçersiz kullanıcı adı veya şifre' });
    } else {
      res.json({ message: 'Giriş başarılı' });
    }
  });
});

// Sunucuyu dinlemeye başlayın
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
