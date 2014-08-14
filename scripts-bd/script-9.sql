ALTER TABLE anexos_solicitud_pedido
ADD CONSTRAINT PK_anexos_solicitud_pedido PRIMARY KEY(AnexoID)
go
ALTER TABLE avaluo_de_articulos
ADD CONSTRAINT PK_avaluo_de_articulos PRIMARY KEY(ArticuloAvaluoID)
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
ALTER TABLE grupo_de_compras
ADD CONSTRAINT PK_grupo_de_compras PRIMARY KEY(GrupoComprasID)
go
ALTER TABLE lineas_solicitud_pedido
ADD CONSTRAINT PK_lineas_solicitud_pedido PRIMARY KEY(LineaSolicitudPedidoID)
go
ALTER TABLE organizacion_de_compras
ADD CONSTRAINT PK_organizacion_de_compras PRIMARY KEY(OrganizacionComprasID)
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
ALTER TABLE aprobacion_de_contratos
ADD CONSTRAINT PK_aprobacion_de_contratos PRIMARY KEY(ID_INSTITUCION,NUM_SIGAF,ID_APROBACION)
go
ALTER TABLE aprobacion_de_adendums
ADD CONSTRAINT PK_aprobacion_de_adendums PRIMARY KEY(ID_INSTITUCION,NUM_SIGAF,NUM_ADENDUM,ID_APROBACION)
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
ALTER TABLE lugares_de_apertura
ADD CONSTRAINT PK_lugares_de_apertura PRIMARY KEY(ID_LUGARAPERTURA)
go
ALTER TABLE tipos_de_personeria
ADD CONSTRAINT PK_tipos_de_personeria PRIMARY KEY(tipoPersonaID)
go