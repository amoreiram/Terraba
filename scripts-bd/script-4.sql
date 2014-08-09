use comprared
go

SELECT [NUMPROV]
      ,[FECHA_INICIO]
      ,[FECHA_FINAL]
      ,[TIPO_SANCION]
      ,[NUM_RESOLUCION]
      ,[TRAMIDEN]
      ,[TITUTRAM]
      ,[LINEA]
      ,[DESCRIPCION]
      ,[CATALOGO]
      ,[CODMERC]
      ,[FEC_INCUMPLIMIENTO] into terraba.dbo.sanciones_por_proveedor
  FROM [COMPRARED].[dbo].[PROVEEDOR_SANCION]

  go

  SELECT [ID]
      ,[TITUTRAM]
      ,[TRAMIDEN]
      ,[FEC_ACLARACION]
      ,[ID_USUARIO]
      ,[ID_DOCUMENTO]
      ,[ID_NOTIFICACION]
      ,[texto] into terraba.dbo.aclaraciones
  FROM [COMPRARED].[dbo].[ACLARACION]

use terraba
go
EXEC sp_rename 'sanciones_por_proveedor.TITUTRAM', 'titulo_institucion', 'COLUMN';
EXEC sp_rename 'aclaraciones.TITUTRAM', 'titulo_institucion', 'COLUMN';

use COMPRARED
go

SELECT [TITUTRAM]
      ,[TRAMIDEN]
      ,[LINEA]
      ,[ID_SOLICITUD] into terraba.dbo.aclaraciones_por_linea
  FROM [COMPRARED].[dbo].[ACLARACION_LINEAS]

use terraba
go
EXEC sp_rename 'aclaraciones_por_linea.TITUTRAM', 'titulo_institucion', 'COLUMN';

use COMPRARED
go

SELECT [ID_ACLARACION]
      ,[ID_SOLICITUD] into terraba.dbo.aclaraciones_por_solicitudes_aclaracion
  FROM [COMPRARED].[dbo].[ACLARACION_SOLICITUD]

use COMPRARED
go

SELECT [BancoID]
      ,[Sigla]
      ,[Nombre]
      ,[CodSINPE] into terraba.dbo.bancos
  FROM [COMPRARED].[dbo].[Banco]

use terraba
go

EXEC sp_rename 'bancos.BancoID', 'id_banco', 'COLUMN';
EXEC sp_rename 'bancos.Sigla', 'siglas', 'COLUMN';
EXEC sp_rename 'bancos.Nombre', 'nombre', 'COLUMN';
EXEC sp_rename 'bancos.CodSINPE', 'codigo_sinpe', 'COLUMN';

use terraba
go

ALTER TABLE bancos
alter column id_banco integer

ALTER TABLE bancos
ADD CONSTRAINT pk_bancos PRIMARY KEY(id_banco)

use comprared
go

drop table CAMPO_ESPEJO
drop table CAMPO_FECHA
drop table CAMPO_HORA
drop table CAMPO_MASCARA
drop table CAMPO_NUMERO
--drop table campo

go

use comprared
go 

SELECT [ID]
      ,[TITUTRAM]
      ,[TRAMIDEN]
      ,[NUMPROV]
      ,[FEC_SOLICITUD]
      ,[ID_DOCUMENTO]
      ,[ID_NOTIFICACION]
      ,[ID_USUARIO]
      ,[texto]
      ,[ID_MODIFICACION] into terraba.dbo.solicitudes_aclaracion
  FROM [COMPRARED].[dbo].[SOLICITUD_ACLARACION]

USE terraba
GO
EXEC sp_rename 'terraba.dbo.solicitudes', 'solicitudes_pedido'
EXEC sp_rename 'terraba.dbo.solicitudes_eliminadas', 'solicitudes_pedido_eliminadas'