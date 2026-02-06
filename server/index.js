const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products')
const path = require('path')

mongoose.connect(config.DB_URI).then(
    () => {
        if (process.env.NODE_ENV !== 'production') {
            const fakeDb = new FakeDb();
            // テスト環境で、DB初期化したい時だけコメント解除
            // fakeDb.initDb();
        }
    }
);

const app = express();

app.use('/api/v1/products', productRoutes);

if (process.env.NODE_ENV === 'production') {
    const appPath = path.join(__dirname, '..', 'dist', 'reservation-app', 'browser');
    app.use(express.static(appPath));
    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(appPath, 'index.html'));
    });
}

const PORT = process.env.PORT || '3001';
app.listen(PORT, function() {
    console.log('I am running!');
})