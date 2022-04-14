exports.homePage = (req, res) => {
    res.render('homepage', {title: 'Home'});
};
exports.about = (req, res) => {
    res.render('about', {title: 'About Us'});
};
exports.gallery = (req, res) => {
    res.render('gallery', {title: 'Gallery'});
};
exports.contact = (req, res) => {
    res.render('contact', {title: 'Contact Us'});
};

