ALTER TABLE anexos_solicitud_pedido
ADD CONSTRAINT PK_anexos_solicitud_pedido PRIMARY KEY(AnexoID)
go
ALTER TABLE avaluo_articulos
ADD CONSTRAINT PK_avaluo_articulos PRIMARY KEY(ArticuloAvaluoID)
go
ALTER TABLE autorizacion_contraloria
ADD CONSTRAINT PK_autorizacion_contraloria PRIMARY KEY(AutorizacionCGRID)
go
ALTER TABLE avaluos
ADD CONSTRAINT PK_avaluos PRIMARY KEY(AvaluoID)
go
ALTER TABLE estados_solicitud_pedido
ADD CONSTRAINT PK_estados_solicitud_pedido PRIMARY KEY(EstadoSolicitudPedidoID)
go
ALTER TABLE fondo
ADD CONSTRAINT PK_fondo PRIMARY KEY(FondoID)
go

ALTER TABLE grupo_compras
ADD CONSTRAINT PK_grupo_compras PRIMARY KEY(GrupoComprasID)
go
ALTER TABLE lineas_solicitud_pedido
ADD CONSTRAINT PK_lineas_solicitud_pedido PRIMARY KEY(LineaSolicitudPedidoID)
go

ALTER TABLE organizacion_compras
ADD CONSTRAINT PK_organizacion_compras PRIMARY KEY(OrganizacionComprasID)
go
ALTER TABLE solicitudes_pedido
ADD CONSTRAINT PK_solicitudes_pedido PRIMARY KEY(SolicitudPedidoID)
go
ALTER TABLE tipo_solicitudPedido_usado
ADD CONSTRAINT PK_tipo_solicitudPedido_usado PRIMARY KEY(TipoSolicitudUsadoID)
go
ALTER TABLE tipo_solicitud_pedido
ADD CONSTRAINT PK_tipo_solicitud_pedido PRIMARY KEY(TipoSolicitudPedidoID)
go
ALTER TABLE catalogo_mercancias
ADD CONSTRAINT PK_catalogo_mercancias PRIMARY KEY(CODMERC,CATALOGO)
go

ALTER TABLE aprobacion_contratos
ADD CONSTRAINT PK_aprobacion_contratos PRIMARY KEY(ID_INSTITUCION,NUM_SIGAF,ID_APROBACION)
go
ALTER TABLE aprobacion_adendums
ADD CONSTRAINT PK_aprobacion_adendums PRIMARY KEY(ID_INSTITUCION,NUM_SIGAF,NUM_ADENDUM,ID_APROBACION)
go
ALTER TABLE recursos
ADD CONSTRAINT PK_recursos PRIMARY KEY(NUM_RECURSO)
go
ALTER TABLE adendums
ADD CONSTRAINT PK_adendums PRIMARY KEY(ID_INSTITUCION,NUM_SIGAF,NUM_ADENDUM)
go
ALTER TABLE instrumentos_financieros
ADD CONSTRAINT PK_instrumentos_financieros PRIMARY KEY(COD_INSTRUMENTO)
go
ALTER TABLE lugares_apertura
ADD CONSTRAINT PK_lugares_apertura PRIMARY KEY(ID_LUGARAPERTURA)
go
ALTER TABLE tipo_personeria
ADD CONSTRAINT PK_tipo_personeria PRIMARY KEY(tipoPersonaID)
go
ALTER TABLE aclaraciones
ADD CONSTRAINT PK_relacion_catalogos_CGO_COG PRIMARY KEY(CODMERC_CGO,CGO_ID,CODMERC_COG,COG_ID)
go