exports.getNotFoundPage = (req, res) => {
    res.status(404).render('NieZnaleziono', { title: 'NieZnaleziono' });
};
