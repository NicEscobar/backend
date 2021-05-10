const sql = require('mssql');
const configuracaoSQL = require('./models/ConexaoSQL');

module.exports = {
  
    async SQL_CadastrarAluno (request, response){
       
        const {Nome, Senha, Email} = request.body; 
  
        var conn = new sql.ConnectionPool(configuracaoSQL);

        conn.connect(function(err){
  
          if (err) throw err;
  
          console.log("Conectado!")
          
          var req =  new sql.Request(conn);
         
          var comando = `exec Verificacao_Aluno @nome = ${Nome}, @email = ${Email},  @senha = ${Senha}`;
          
          req.query(comando, function (err, resposta) {
            
            if (resposta.recordset.length == 0)
                response.json("Aluno cadastrado com sucesso");
            else    
                response.json("Aluno já existe");

            conn.close();
          });  
      });
  }}
  

