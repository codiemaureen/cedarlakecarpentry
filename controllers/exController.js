exports.homePage = (req, res) => {
    res.render('homepage', {title: 'Home'});
};
exports.about = (req, res) => {
    res.render('about', {title: 'About Us'});
};

