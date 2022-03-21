const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const Todo = require('./models/todo');


mongoose.connect('mongodb://localhost/firstmongo')




app.use('/', express.static(path.resolve(_dirname, 'assets')))

app.use(bodyParser.json())

// Create
app.post('/api/create', async (req, res) => {
    const record = req.body
    console.log(record)

    await Todo.create(record)

    res.json({ status: 'ok' })
})




app.listen(3001, () => {
    console.log('server running on 3001')
})