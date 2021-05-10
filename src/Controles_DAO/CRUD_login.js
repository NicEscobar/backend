const sql = require('mssql');
const configuracaoSQL = require('./models/ConexaoSQL');

var Aluno = Object.create(null);

module.exports = {
  
    async SQL_Login (request, response){
       
        const {Senha, Email} = request.body; 
  
        var conn = new sql.ConnectionPool(configuracaoSQL);
        
        conn.connect(function(err){
  
          if (err) throw err;
  
          console.log("Conectado!")
          
          var req =  new sql.Request(conn);
    
          var comando = `SELECT * FROM ProvIna_Database.dbo.Aluno WHERE Email = '${Email}'`;
          
          req.query(comando, function (err, resposta) {
            
            if (resposta.recordset.length == 0){       
                response.json("Aluno não cadastrado ou email inválido!");
            }
            else if (resposta.recordset[0].Senha == Senha ){
                
                response.json(resposta.recordset[0]);

                Aluno.Id = resposta.recordset[0].IdAluno;
                Aluno.nome = resposta.recordset[0].Nome;
                Aluno.Email = resposta.recordset[0].Email;
                Aluno.Senha = resposta.recordset[0].Senha;

            }
            else response.json("Senha inválida");
            
            conn.close();
          });  
      });
  }}