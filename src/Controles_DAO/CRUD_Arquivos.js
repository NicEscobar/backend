const sql = require('mssql');
const configuracaoSQL = require('./models/ConexaoSQL');

module.exports = {
  
    async SQL_InserirArquivos (request, response){
       
      const {NomeArquivo, Categoria, URls, NumeroCurtidas, IdAluno_Arquivos} = request.body; 
        

      const data = new Date();
      const DataCriacao = data.toLocaleDateString();  
     
      var conn = new sql.ConnectionPool(configuracaoSQL);

      conn.connect(function(err){
  
        if (err) throw err;
  
        console.log("Conectado!")
                  
        var req =  new sql.Request(conn);
    
        var comando = `  INSERT INTO [ProvIna_Database].[dbo].[Arquivo] (IdAluno_Arquivos,NomeArquivo, Categoria, DataCriacao, URLs, NumeroCurtidas)
                          VALUES (${IdAluno_Arquivos},'${NomeArquivo}','${Categoria}',${DataCriacao},'${URls}',${NumeroCurtidas});`;
          
        req.query(comando, function (err, resposta) {
            
          if(err) throw err;

            response.json("Arquivo inserido.");
            conn.close();
          });  
        });
    },

    async SQL_DeletarArquivo (request, response){
       
      const {IdArquivo} = request.body; 
     
      var conn = new sql.ConnectionPool(configuracaoSQL);

      conn.connect(function(err){
  
        if (err) throw err;
  
        console.log("Conectado!")
                  
        var req =  new sql.Request(conn);
    
        var comando = `DELETE FROM [ProvIna_Database].[dbo].[Arquivo]  WHERE IdArquivos = ${IdArquivo};`;
          
        req.query(comando, function (err, resposta) {
            
          if(err) throw err;

            response.json("Arquivo deletado.");
            conn.close();
          });  
        });
    },

    async SQL_BuscarArquivo (request, response){
       
      const {IdAluno_Arquivos} = request.body; 
     
      var conn = new sql.ConnectionPool(configuracaoSQL);

      conn.connect(function(err){
  
        if (err) throw err;
  
        console.log("Conectado!")
                  
        var req =  new sql.Request(conn);
    
        var comando = `SELECT * FROM [ProvIna_Database].[dbo].[Arquivo] WHERE [IdAluno_Arquivos] = ${IdAluno_Arquivos};`;
          
        req.query(comando, function (err, resposta) {
            
          if(err) throw err;

            response.json(resposta.recordset);
            conn.close();
          });  
        });
    }
}