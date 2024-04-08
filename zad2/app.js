const express = require('express');
const bodyParser = require('body-parser');
const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', studentsController.getAddNewStudentPage);
app.post('/add-student', studentsController.postAddNewStudent);

app.use(errorController.getNotFoundPage);

app.listen(PORT, () => {
    console.log(`Port serwera to: ${PORT}`);
});
