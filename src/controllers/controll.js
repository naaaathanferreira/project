const service = require ('../services/service.js');

module.exports = {
    buscarTodos: async (req, res)=> {
        let json = {error: '', result:[]};
        let alunos = await service.buscarTodos();

        for(let i in alunos){
            json.result.push({
                codigo: alunos[i].codigo,
                nome: alunos[i].nome,
                nome_user: alunos[i].nome_user,
                email: alunos[i].email,
                senha: alunos[i].senha
            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = {error: '', result: {}};

        let codigo = req.params.codigo;
        let alunos = await service.buscarUm(codigo);

        if(alunos){
            json.result = alunos;
        }
        res.json(json);
    },
    
    inserir: async(req, res) => {
        let json = {error: '', result: {}};

        let nome = req.body.nome; 
        let nome_user = req.body.nome_user; 
        let email = req.body.email;
        let senha = req.body.senha;

        if(nome && nome_user && email && senha){
            let alunosCodigo = await service.inserir(nome, nome_user, email, senha);
            json.result = {
                codigo: alunosCodigo,
                nome,
                nome_user,
                email,
                senha
            };
        }else{
            json.error = "Campos não enviados!";
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error: '', result: {}};
        
        let codigo = req.params.codigo;
        let nome = req.body.nome; 
        let nome_user = req.body.nome_user; 
        let email = req.body.email;
        let senha = req.body.senha;
        
        if(codigo && nome && nome_user && email && senha){
            await service.alterar(codigo, nome, nome_user, email, senha);
            json.result = {
                codigo,
                nome,
                nome_user,
                email,
                senha
            };
        }else{
            json.error = "Campos não enviados!";
        }
        res.json(json);
    },

    deletar: async(req, res) => {
        let json = {error: '', result: {}};
        await service.deletar(req.params.codigo);
        res.json(json);
    }
}