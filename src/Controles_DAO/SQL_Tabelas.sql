USE [ProvIna_Database]
GO

CREATE TABLE [dbo].[Aluno](
	[IdAluno] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [varchar](255) NOT NULL,
	[Senha] [varchar](45) NOT NULL,
	[Email] [varchar](45) NOT NULL,
 CONSTRAINT [PK_IdAluno] PRIMARY KEY CLUSTERED )

 CREATE TABLE [dbo].[Arquivo](
	[IdArquivos] [int] IDENTITY(1,1) NOT NULL,
	[IdAluno_Arquivos] [int] NOT NULL,
	[NomeArquivo] [varchar](45) NOT NULL,
	[Categoria] [varchar](45) NOT NULL,
	[DataCriacao] [datetime] NOT NULL,
	[URLs] [varchar](45) NOT NULL,
	[NumeroCurtidas] [int] NULL,
 CONSTRAINT [PK_IdArquivos] PRIMARY KEY CLUSTERED )
