const db = require ('../db');
module.exports = {
    buscarTodos: ()=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM alunos', (error, results)=>{
                if(error){rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (codigo)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM alunos WHERE codigo = ?', [codigo], (error, results)=>{
                if(error) {rejeitado(error); return; }
                if(results.length > 0){

                    aceito(results[0]);

                }else{
                    aceito(false)
                }
            });
        });
    },

    inserir: (nome, nome_user, email, senha)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO alunos (nome, nome_user, email, senha) VALUES (?, ?, ?, ?)', [nome, nome_user, email, senha], (error, results)=>{
                if(error) {rejeitado(error); return; }
                aceito(results.insertCodigo);
                }
            );
        });
    },

    alterar: (codigo, nome, nome_user, email, senha)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('UPDATE alunos SET nome = ?, nome_user = ?, email = ?, senha = ? WHERE codigo = ?', [nome, nome_user, email, senha], (error, results)=>{
                if(error) {rejeitado(error); return; }
                aceito(results);
                }
            );
        });
    },
    
    deletar: (codigo)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM alunos WHERE codigo = ?', [codigo], (error, results)=>{
                if(error) {rejeitado(error); return; }
                aceito(results);
                }
            );
        });
    }
}
