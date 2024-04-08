let students = [];
let nextId = 1;

exports.dodajStudenta = (req, res) => {
    const { imieINazwisko, kod, kierunekStudiow } = req.body;
    const nowyStudent = {
        id: nextId,
        imieINazwisko,
        kod,
        kierunekStudiow
    };
    studenci.push(nowyStudent);
    nextId++;
    res.redirect('/success');
};

exports.getDodanoStudentaStrona = (req, res) => {
    res.render('Success', { 
        title: 'Sukces',
        message: 'Student został dodany pomyślnie!',
        links: [{url: '/', label: 'Strona główna'}, {url: '/students-list', label: 'Lista'}]
    });
};

exports.getListaStudentowStrona = (req, res) => {
    res.render('List', { 
        title: 'Lista',
        students: studenci
    });
};
