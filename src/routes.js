PORT=3000;

const express = require('express');
const router = express.Router();

const controll = require('./controllers/controll');

router.get('/alunos', controll.buscarTodos);
router.get('/alunos/:codigo', controll.buscarUm);
router.post('/alunos', controll.inserir);
router.put('/alunos/:codigo', controll.alterar);
router.delete('/alunos/:codigo', controll.deletar);

module.exports = router;
