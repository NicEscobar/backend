USE [ProvIna_Database]
GO

CREATE TABLE [dbo].[Aluno](
	[IdAluno] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [varchar](255) NOT NULL,
	[Senha] [varchar](45) NOT NULL,
	[Email] [varchar](45) NOT NULL,
 CONSTRAINT [PK_IdAluno] PRIMARY KEY CLUSTERED (IdAluno) )

 CREATE TABLE [dbo].[Arquivo](
	[IdArquivos] [int] IDENTITY(1,1) NOT NULL,
	[IdAluno_Arquivos] [int] NOT NULL,
	[NomeArquivo] [varchar](45) NOT NULL,
	[Categoria] [varchar](45) NOT NULL,
	[DataCriacao] [datetime] NOT NULL,
	[URLs] [varchar](45) NOT NULL,
	[NumeroCurtidas] [int] NULL,
 CONSTRAINT [PK_IdArquivos] PRIMARY KEY CLUSTERED (IdArquivos))

 
  insert into [ProvIna_Database].[dbo].[Aluno] ([Nome],[Senha],[Email]) VALUES ('Nicole','123','ni@')

  
 insert into [ProvIna_Database].[dbo].[Arquivo] ([IdAluno_Arquivos],[NomeArquivo],[Categoria],[DataCriacao],[URLs],[NumeroCurtidas]) 
  VALUES (1,'prova','calculo', '03/04/2021','url',3)
