const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const { urlDb } = require('../config');

mongoose.connect(urlDb);

const db = mongoose.connection;

// Event listener untuk menangkap event koneksi berhasil
db.on('connected', () => {
    console.log('Connected to MongoDB');
});

// Event listener untuk menangkap event koneksi gagal
db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

module.exports = db;
