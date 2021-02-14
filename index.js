//CRIANDO UMA APP EXPRESS
const express = require('express');
const app = express();

//CONFIGURANDO MARKO
require('marko/node-require'); // Permitir que Node.js exija e carregue arquivos `.marko`
var markoExpress = require("marko/express");
app.use(markoExpress());

//CONFIGURANDO BODY PARSER
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded()); // função que traduz o conteudo do formulario para um json

//CRIANDO DAO
const AlunoDao = require('./dao/alunodao'); // importando o nosso arquivo dao
const dao = new AlunoDao(); // criando o objeto

//CONFIGURANDO MENSAGENS FLASH
const session = require('express-session');
const flash = require('connect-flash')
app.use(session({
    secret: 'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());

//IMPLEMENTAÇÃO DAS ROTAS
app.get('/', function (req, res) {

    let response = {
        error_messages: req.flash('error'),
        sucess_messages: req.flash('sucess'),
        results: []
    }

    dao.list().then((results) => { //passar a lista que vem do banco
        response.results = results;
        res.marko(require('./templates/alunos.marko'), response);
    }).catch((err) => {
        console.log(err)
        response.error_messages.push('Ocorreu algum erro no servidor')
        res.marko(require('./templates/alunos.marko'), response);
    });

});
app.get('/form', function (req, res) {
    res.marko(require('./templates/form.marko')); // res chamando o arquivo marko
});
app.get('/form/:id', function (req, res) {

    dao.findById(req.params.id).then((result) => {

        if (result.length > 0) {
            aluno = result[0];
            res.marko(require('./templates/form.marko'), aluno); // res chamando o arquivo marko
        } else {
            req.flash('error', 'Não foi encontrado aluno com o id = ' + req.params.id);
            res.redirect('/'); // quando for deletado, ele recarrega a página atualizada
        }
    }).catch((err) => {
        console.log(err);
        req.flash('error', 'Ocorreu um erro ao buscar o aluno de id igual = ' + req.params.id);
        res.redirect('/'); // quando for deletado, ele recarrega a página atualizada
    });


});
app.get('/alunos/delete/:id', function (req, res) { // o req guarda o que o navegador envia
    dao.delete(req.params.id).then((result) =>{
        req.flash('sucess', 'Usuário removido com sucesso.')
        res.redirect('/')
    }).catch((err) =>{
        console.log(err);
        req.flash('error', 'Ocorreu um erro ao tentar remover o usuário.')
        res.redirect('/')
    })
    // quando for deletado, ele recarrega a página atualizada
});

//salvar os alunos

app.post('/alunos', function (req, res) { //req vai tratar a requisição que chega do formulário
    if (req.body.id) { //pegar a resquisição do id no corpo
        dao.update(req.body).then( (result) =>{
            req.flash('sucess', 'Dados do aluno atualizados com sucesso.')
            res.redirect('/')
        }).catch( (err) =>{
            console.log(err)
            req.flash('error', 'Ocorreu um erro ao atualizar os dados do aluno ' + aluno.nome)
            res.redirect('/')

        }) 
        
    } else {
        //dao pega o json e salva de imediato
        dao.save(req.body).then( (result) => {
            req.flash('sucess', 'Aluno salvo com sucesso.')
            res.redirect('/');
        }).catch((err) => {
            console.log(err);
            req.flash('error', 'Ocorreu um erro ao salvar os dados do aluno.')
            res.redirect('/');
        });
    }
});
app.listen(3000, '0.0.0.0', function () {
    console.log('Servidor iniciado');
});