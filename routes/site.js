exports.chat = function(req, res){
  res.render('octochat', { title: 'Octochat - miniTwr' });
};

exports.profil = function(req, res){
  res.render('profil', { title: 'Profil - miniTwr' });
};

exports.option = function(req, res){
  res.render('option', { title: 'Options - miniTwr' });
};

exports.enregistrement = function(req, res){
  res.render('enregistrement', { title: 'Enregistrement - miniTwr' });
};