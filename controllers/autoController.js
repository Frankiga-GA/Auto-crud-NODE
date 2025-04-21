const db = require('../config/db');

exports.listarAutos = (req, res) => {
  db.query('SELECT * FROM autos', (err, resultados) => {
    if (err) throw err;
    res.render('index', { autos: resultados });
  });
};

exports.mostrarFormularioCrear = (req, res) => {
  res.render('create');
};

exports.crearAuto = (req, res) => {
  const datos = req.body;
  db.query('INSERT INTO autos SET ?', datos, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
};

exports.mostrarFormularioEditar = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM autos WHERE id = ?', [id], (err, resultados) => {
    if (err) throw err;
    res.render('edit', { auto: resultados[0] });
  });
};

exports.editarAuto = (req, res) => {
  const id = req.params.id;
  const datos = req.body;
  db.query('UPDATE autos SET ? WHERE id = ?', [datos, id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
};

exports.eliminarAuto = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM autos WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
};