use comprared
go

SELECT [TRAMIDEN]
      ,[TITUTRAM]
      ,[TIPOTRAM]
      ,[NUMETRAM]
      ,[PERITRAM]
      ,[DESCTRAM]
      ,[FCHAPERT]
      ,[HORAPERT]
      ,[ESTADOTR]
      ,[OBSERVACIONES]
      ,[TITULO_APERT]
      ,[PROVEE_APERT]
      ,[FCHAPUBL]
      ,[NUMGACETA]
      ,[NUMALCANCE]
      ,[PUBLICABLE]
      ,[DESCTRAM1]
      ,[CARTEL_DOC]
      ,[CONTRALORIA]
      ,[ULT_MOVIMIENTO]
      ,[cabecera]
      ,[FCHACREACION]
      ,[EsCR20]
      ,[EsPrecalificado]
      ,[EsDosFases]
      ,[FchApert2] into terraba.dbo.tramites
  FROM [COMPRARED].[dbo].[TRAMITE]

go
SELECT [TRAMIDEN]
      ,[TITUTRAM]
      ,[TIPOTRAM]
      ,[NUMETRAM]
      ,[PERITRAM]
      ,[DESCTRAM]
      ,[FCHAPERT]
      ,[HORAPERT]
      ,[ESTADOTR]
      ,[OBSERVACIONES]
      ,[TITULO_APERT]
      ,[PROVEE_APERT]
      ,[FCHAPUBL]
      ,[NUMGACETA]
      ,[NUMALCANCE]
      ,[PUBLICABLE]
      ,[CARDID]
      ,[FECHACAMBIO] into terraba.dbo.historial_tramites
  FROM [COMPRARED].[dbo].[TRAMITE_HISTORIAL]

go
SELECT [TRAMIDEN]
      ,[LINEA]
      ,[SOLICIT]
      ,[CANTIDAD]
      ,[CODMERC]
      ,[CATALOGO]
      ,[MEDIDA]
      ,[DESCRIP]
      ,[TITUTRAM]
      ,[ESTADOLIN]
      ,[POS_SOLICIT]
      ,[EMPAQUE]
      ,[DESCRIPCION_GENERICA] into terraba.dbo.lineas_x_tramite
  FROM [COMPRARED].[dbo].[TRAMITE_LINEA]

  
go
SELECT [TramIden]
      ,[TituTram]
      ,[Id_Usuario]
      ,[ArchivoComprimidoID]
      ,[Justificacion]
      ,[Aprobado] into terraba.dbo.tramites_anulados
  FROM [COMPRARED].[dbo].[TRAMITE_ANULADO]

go
SELECT [TRAMIDEN]
      ,[ID_PROGRAMA]
      ,[ID_SUBPROGRAMA]
      ,[ID_MINISTERIO]
      ,[ID_PROYECTO] into terraba.dbo.tramites_x_dependencia
  FROM [COMPRARED].[dbo].[TRAMITE_DEPENDENCIA]

go
SELECT [TRAMIDEN]
      ,[ID]
      ,[DESCRIPCION]
      ,[RUTA]
      ,[FECHA]
      ,[HORA]
      ,[TITUTRAM]
      ,[PUBLICABLE]
      ,[TIPO_DOCUMENTO]
      ,[MEDIO]
      ,[CONTRALORIA] into terraba.dbo.documentos_x_tramite
  FROM [COMPRARED].[dbo].[TRAMITE_DOCUMENTO]
  
go
/*
SELECT [SolicitudID]
      ,[NumProv]
      ,[FechaCreacion]
      ,[IdUsuario]
      ,[FechaCitaRecepcion]
      ,[FechaRemite]
      ,[toDefSolicitudID]
      ,[toEstadoSolicitudProvID]
      ,[toUnidadRegistroID]
      ,[FechaModificacion] into terraba.dbo.solicitudes
  FROM [COMPRARED].[dbo].[Solicitud]

go
SELECT [SolicitudesEliminadasID]
      ,[ObjectVersion]
      ,[SolicitudID]
      ,[TipoSolicitud]
      ,[IdUsuario]
      ,[NumProv]
      ,[NombreProv]
      ,[FechaInicio]
      ,[FechaModificacion]
      ,[FechaBorrado]
      ,[IdNotificacion] into terraba.dbo.solicitudes_eliminadas
  FROM [COMPRARED].[dbo].[SolicitudesEliminadas]
  */
use terraba
go
EXEC sp_rename 'tramites.TITUTRAM', 'titulo_institucion', 'COLUMN';

use terraba
go
EXEC sp_rename 'tramites_anulados.TITUTRAM', 'titulo_institucion', 'COLUMN';