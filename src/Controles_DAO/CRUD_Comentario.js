const sql = require('mssql');
const configuracaoSQL = require('./models/ConexaoSQL');

module.exports = {
  
    async SQL_InserirComentario (request, response){
       
      const {Texto, IdAluno, IdArquivo} = request.body; 
        

      const data = new Date();
      const DataCriacao = data.toLocaleDateString();  
     
      var conn = new sql.ConnectionPool(configuracaoSQL);

      conn.connect(function(err){
  
        if (err) throw err;
  
        console.log("Conectado!")
                  
        var req =  new sql.Request(conn);
    
        var comando = `  INSERT INTO [ProvIna_Database].[dbo].[Comentario] (Texto, Data, IdArquivo, IdAluno)
                          VALUES (${Texto},'${DataCriacao}',${IdArquivo},${IdAluno});`;
          
        req.query(comando, function (err, resposta) {
            
          if(err) throw err;

            response.json("Comentario inserido.");
            conn.close();
          });  
        });
    },

    async SQL_DeletarComentario (request, response){
       
      const {IdComentario} = request.body; 
     
      var conn = new sql.ConnectionPool(configuracaoSQL);

      conn.connect(function(err){
  
        if (err) throw err;
  
        console.log("Conectado!")
                  
        var req =  new sql.Request(conn);
    
        var comando = `DELETE FROM [ProvIna_Database].[dbo].[Comentario]  WHERE IdComentario = ${IdComentario};`;
          
        req.query(comando, function (err, resposta) {
            
          if(err) throw err;

            response.json("Comentario deletado.");
            conn.close();
          });  
        });
    },

    async SQL_BuscarComentarios (request, response){
       
      const {IdAluno,IdArquivo} = request.body; 
     
      var conn = new sql.ConnectionPool(configuracaoSQL);

      conn.connect(function(err){
  
        if (err) throw err;
  
        console.log("Conectado!")
                  
        var req =  new sql.Request(conn);
    
        var comando = `SELECT * FROM [ProvIna_Database].[dbo].[Comentario] WHERE [IdAluno] = ${IdAluno} AND IdArquivo = ${IdArquivo};`;
          
        req.query(comando, function (err, resposta) {
            
          if(err) throw err;

            response.json(resposta.recordset);
            conn.close();
          });  
        });
    }
}