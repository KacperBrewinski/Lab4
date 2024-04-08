exports.getAddNewStudentPage = (req, res) => {
    res.render('Home', { title: 'Add new student' });
};
exports.postAddNewStudent = (req, res) => {
    res.redirect('/students-list');
};
