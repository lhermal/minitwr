/*
 * GET real home page.
 */

exports.homePage = function(req, res){
  res.render('octochat', { title: 'Octochat - miniTwr' });
};
