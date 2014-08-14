--eliminar tablas creadas pero que no proceden
drop table terraba..solicitudes_pedido
go
drop table terraba..solicitudes_pedido_eliminadas
go

USE [terraba]
GO

/****** Object:  Table [dbo].[AUTORIZACION_INTERNA]    Script Date: 13/08/2014 01:30:45 p.m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[autorizaciones_interna_contraloria](
	[TRAMIDEN] [varchar](24) NOT NULL,
	[TITUTRAM] [varchar](4) NOT NULL,
	[TIPO_AUTORIZACION] [varchar](2) NOT NULL,
	[NUM_OFICIO] [varchar](40) NOT NULL,
	[CEDULA_FUNCIONARIO] [varchar](10) NULL,
	[PUESTO_FUNCIONARIO] [varchar](50) NULL,
	[NOMBRE_FUNCIONARIO] [varchar](80) NULL,
	[FECHA] [datetime] NULL,
 CONSTRAINT [PK_autorizaciones_interna_contraloria] PRIMARY KEY CLUSTERED 
(
	[TRAMIDEN] ASC,
	[TITUTRAM] ASC,
	[TIPO_AUTORIZACION] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

-- *************** CARGAR DATOS DE AUTORIZACIONES ****************************
USE [terraba]
GO
-- CARGAR REGISTROS DE AUTORIZACIONES DE CONTRALORIA
INSERT INTO [dbo].[autorizaciones_interna_contraloria]
           ([TRAMIDEN]
           ,[TITUTRAM]
           ,[TIPO_AUTORIZACION]
           ,[NUM_OFICIO])
     SELECT TRAMIDEN,
           TITUTRAM,
           'AC',
           NUM_OFICIO
	FROM COMPRARED..AUTORIZACION_CONTRALORIA
	WHERE TITUTRAM = 66
GO


-- CARGAR REGISTROS DE AUTORIZACIONES INTERNAS
INSERT INTO [dbo].[autorizaciones_interna_contraloria]
           ([TRAMIDEN]
           ,[TITUTRAM]
           ,[TIPO_AUTORIZACION]
           ,[NUM_OFICIO]
           ,[CEDULA_FUNCIONARIO]
           ,[PUESTO_FUNCIONARIO]
           ,[NOMBRE_FUNCIONARIO]
           ,[FECHA])
     SELECT TRAMIDEN,
           TITUTRAM,
           'AI',
           NUM_OFICIO,
           CEDULA_FUNCIONARIO,
           PUESTO_FUNCIONARIO,
           NOMBRE_FUNCIONARIO,
           FECHA
	FROM COMPRARED..AUTORIZACION_INTERNA
	WHERE TITUTRAM = 66
GO


--  ******** TABLASSS **********
select * into terraba..tipos_de_personeria from TipoPersona
go
select * into terraba..lugares_de_apertura from LUGARES_APERTURA
go
select * into terraba..instrumentos_financieros from INSTRUMENTOS_FINANCIEROS
go
select * into terraba..adendums from ADENDUMS
go
select * into terraba..recursos from RECURSOS
go
select * into terraba..aprobacion_de_adendums from APROBACION_ADENDUM
go
select * into terraba..aprobacion_de_contratos from APROBACION_CONTRATO
go
select * into terraba..catalogo_mercancias from MERCANCIA
go
select * into terraba..tipo_solicitud_pedido from sop.TipoSolicitudPedido
go
select * into terraba..tipo_solicitudPedido_usado from sop.TipoSolicitudUsado
go
select * into terraba..solicitudes_pedido from sop.SolicitudPedido
go
select * into terraba..organizacion_de_compras from sop.OrganizacionCompras
go
select * into terraba..lineas_solicitud_pedido from sop.LineaSolicitudPedido
go
select * into terraba..grupo_de_compras from sop.GrupoCompras
go
select * into terraba..fondo from sop.Fondo
go
select * into terraba..estados_solicitud_pedido from sop.EstadoSolicitudPedido
go
select * into terraba..avaluos from sop.Avaluo
go
select * into terraba..autorizacion_contraloria from sop.AutorizacionCGR
go
select * into terraba..avaluo_de_articulos from sop.ArticuloAvaluo
go
select * into terraba..anexos_solicitud_pedido from sop.Anexo
go
