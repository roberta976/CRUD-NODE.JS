//DAO
//chamando o banco de dados
const mysql = require('mysql2');
//criando a classe para o acesso aos dados


class AlunoDao {

    constructor() {
        this._connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '1234',
            database: 'crude_node'
        });

        this._alunos = [
            { id: 1, nome: 'Roberta', curso: 'ads' },
            { id: 2, nome: 'Gabriel', curso: 'ads' },
            { id: 3, nome: 'José', curso: 'ads' }
        ]

    }

    //métodos

    list() { //retorna o array
        return new Promise((resolve, reject) => {
            this._connection.query(
                'select * from alunos',
                function (err, results) {
                    if (err) {
                        reject(err);
                    }else {
                        resolve(results);
                        console.log(results)
                    }
                }

            );

        });
    }
    save(aluno) {
        return new Promise((resolve, reject) =>{
            this._connection.query(
                'insert into alunos (nome, email, curso) values(?,?,?) ', [aluno.nome, aluno.email, aluno.curso],
                function(err, results) {
                    if (err) {
                        reject(err);
                    }else{
                        resolve(results);
                    }
                }   
            )
        })  
    } // salvar os dados de um novo aluno cadastrado
        

    update(aluno) { // atualizar os dados do aluno dps do EDIT
        return new Promise((resolve, reject) =>{
            this._connection.query(
                'update alunos set nome=?, email=?, curso=? where id=?', [aluno.nome, aluno.email, aluno.curso, aluno.id],
                function(err, results) {
                    if (err) {
                        reject(err);
                    }else{
                        resolve(results);
                    }
                }   
            )
        })  
    }
    findById(id) { //recebe  o número identificador e retorna o objeto correspondente
        return new Promise((resolve, reject) =>{
            this._connection.query(
                'select * from alunos where id=?', [id],
                function(err, results) {
                    if (err) {
                        reject(err);
                    }else{
                        resolve(results);
                    }
                }   
            )
        })  
    }

    delete (id) { // deletar os dados do aluno pelo id
        return new Promise((resolve, reject) =>{
            this._connection.query(
                'delete from alunos where id=?', [id],
                function(err, results) {
                    if (err) {
                        reject(err);
                    }else{
                        resolve(results);
                    }
                }   
            )
        })  
    }
}

module.exports = AlunoDao