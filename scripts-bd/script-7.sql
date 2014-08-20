

--  ****************** LLAVES DE TABLAS  *************************
use terraba
go
ALTER TABLE aclaraciones
ADD CONSTRAINT PK_aclaraciones PRIMARY KEY(ID)
go

ALTER TABLE aclaraciones_x_linea
ADD CONSTRAINT PK_aclaraciones_x_linea PRIMARY KEY(titulo_institucion,TRAMIDEN,LINEA,ID_SOLICITUD)
go
ALTER TABLE aclaraciones_x_solicitudes_aclaracion
ADD CONSTRAINT PK_aclarac_x_solicitudes_aclaracion PRIMARY KEY(ID_ACLARACION,ID_SOLICITUD)
GO
ALTER TABLE apartados_postales_proveedores
ADD CONSTRAINT PK_apartados_proveedores PRIMARY KEY(NUMPROV,ID_REGISTRO,APDO)
GO
ALTER TABLE bancos
ADD CONSTRAINT PK_bancos PRIMARY KEY(id_banco)
GO
ALTER TABLE catalogo
ADD CONSTRAINT PK_catalogo PRIMARY KEY(CATALOGO)
GO
ALTER TABLE Provincia
ADD CONSTRAINT PK_provincia PRIMARY KEY(ProvinciaID)
GO
ALTER TABLE Canton
ADD CONSTRAINT PK_canton PRIMARY KEY(CantonID)
GO
ALTER TABLE Distrito
ADD CONSTRAINT PK_distrito PRIMARY KEY(DistritoID)
GO
ALTER TABLE documentos_x_tramite
ADD CONSTRAINT PK_documentos_x_tramite PRIMARY KEY(ID)
GO
ALTER TABLE email_proveedores
ADD CONSTRAINT PK_email_proveedores PRIMARY KEY(NUMPROV,EMAIL)
GO
ALTER TABLE instituciones
ADD CONSTRAINT PK_instituciones PRIMARY KEY(ID_MINISTERIO)
GO
ALTER TABLE lineas_x_tramite
ADD CONSTRAINT PK_lineas_x_tramite PRIMARY KEY(TRAMIDEN,LINEA,TITUTRAM)
GO
ALTER TABLE mercancias_x_proveedor
ADD CONSTRAINT PK_mercancias_x_proveedor PRIMARY KEY(NUMPROV,CODMERC,CATALOGO)
GO
ALTER TABLE observaciones_x_proveedor
ADD CONSTRAINT PK_Obs_x_proveedor PRIMARY KEY(id)
GO
ALTER TABLE proveedores
ADD CONSTRAINT PK_proveedores PRIMARY KEY(NUMPROV)
GO
ALTER TABLE proveedores_x_institucion
ADD CONSTRAINT PK_proveedores_X_institucion PRIMARY KEY(ID_MINISTERIO,NUMPROV)
GO
ALTER TABLE sanciones_x_proveedor
ADD CONSTRAINT PK_sanciones_x_proveedor PRIMARY KEY(NUMPROV,TRAMIDEN,titulo_institucion,LINEA)
GO
ALTER TABLE solicitudes_aclaracion
ADD CONSTRAINT PK_solicitudes_aclaracion PRIMARY KEY(ID)
GO
ALTER TABLE tramites
ADD CONSTRAINT PK_tramites PRIMARY KEY(TRAMIDEN,titulo_institucion)
GO
ALTER TABLE tramites_anulados
ADD CONSTRAINT PK_tramites_anulados PRIMARY KEY(TramIden,titulo_institucion)
GO
ALTER TABLE tramites_x_dependencia
ADD CONSTRAINT PK_tramites_X_dependencia PRIMARY KEY(TRAMIDEN,ID_PROGRAMA,ID_SUBPROGRAMA,ID_MINISTERIO)
GO
ALTER TABLE moneda
ADD CONSTRAINT PK_moneda PRIMARY KEY(SIGLA)
GO
ALTER TABLE emisor_financiero
ADD CONSTRAINT PK_emisor_financiero PRIMARY KEY(SIGLAS_EMISOR)
GO
ALTER TABLE fuentes_financiamiento
ADD CONSTRAINT PK_fuentes_financiamiento PRIMARY KEY(TIPO_FUENTE)
GO
ALTER TABLE aerolineas
ADD CONSTRAINT PK_aerolineas PRIMARY KEY(Codigo)
GO
ALTER TABLE categorias_pymes
ADD CONSTRAINT PK_categorias_pymes PRIMARY KEY(ID)
GO
ALTER TABLE codigos_postales
ADD CONSTRAINT PK_codigos_postales PRIMARY KEY(CodigoPostalID)
GO
ALTER TABLE estado_contratos
ADD CONSTRAINT PK_estado_contratos PRIMARY KEY(ESTADO)
GO

ALTER TABLE estado_ejecucion_garantias
ADD CONSTRAINT PK_estado_ejecucion_garantias PRIMARY KEY(CODIGO)
GO
ALTER TABLE estado_garantias
ADD CONSTRAINT PK_estado_garantias PRIMARY KEY(COD_ESTADO)
GO
ALTER TABLE estado_recursos
ADD CONSTRAINT PK_estado_recursos PRIMARY KEY(EST_RECURSO)
GO
ALTER TABLE estado_sesiones
ADD CONSTRAINT PK_estado_sesiones PRIMARY KEY(ESTADO)
GO
ALTER TABLE estado_solicitudes_publicacion
ADD CONSTRAINT PK_estado_solicitudes_publicacion PRIMARY KEY(ESTADO)
GO
ALTER TABLE estado_proveedores
ADD CONSTRAINT PK_estado_proveedores PRIMARY KEY(STATPROV)
GO
ALTER TABLE formas_pago
ADD CONSTRAINT PK_formas_pago PRIMARY KEY(FORMA_PAGO)
GO
ALTER TABLE gaceta
ADD CONSTRAINT PK_gaceta PRIMARY KEY(AGNO,NUMERO_ALCANCE,NUMERO_GACETA)
GO
ALTER TABLE garantias_x_proveedor
ADD CONSTRAINT PK_garantias_x_proveedor PRIMARY KEY(TIPO,TRAMIDEN,TITUTRAM,NUMPROV)
GO
ALTER TABLE tipos_adendum
ADD CONSTRAINT PK_tipos_adendum PRIMARY KEY(TIPO)
GO
ALTER TABLE tipo_cambio
ADD CONSTRAINT PK_tipo_cambio PRIMARY KEY(SIGLA,FECHA)
GO
ALTER TABLE tipo_contratacion
ADD CONSTRAINT PK_tipo_contratacion PRIMARY KEY(TIPOTRAM)
GO
ALTER TABLE tipos_documento
ADD CONSTRAINT PK_tipo_documento PRIMARY KEY(TIPO_DOCUMENTO)
GO
ALTER TABLE tipos_garantia
ADD CONSTRAINT PK_tipos_garantia PRIMARY KEY(TIPO)
GO
ALTER TABLE tipos_notificacion
ADD CONSTRAINT PK_tipos_notificacion PRIMARY KEY(TIPO)
GO
ALTER TABLE tipos_oferta
ADD CONSTRAINT PK_tipos_oferta PRIMARY KEY(TIPO_OFERTA)
GO
ALTER TABLE tipos_recurso
ADD CONSTRAINT PK_tipos_recurso PRIMARY KEY(TIPO)
GO
ALTER TABLE tipos_tarea
ADD CONSTRAINT PK_tipos_tarea PRIMARY KEY(TIPO)
GO
ALTER TABLE tipos_termino
ADD CONSTRAINT PK_tipos_termino PRIMARY KEY(TIPO_TERMINO)
GO
ALTER TABLE tipos_contrato
ADD CONSTRAINT PK_tipos_contrato PRIMARY KEY(ID_TIPO)
GO
ALTER TABLE tipos_prorroga
ADD CONSTRAINT PK_tipos_prorroga PRIMARY KEY(ID_PRORROGA)
GO
ALTER TABLE tipos_proveedor
ADD CONSTRAINT PK_tipos_proveedor PRIMARY KEY(TIPOPROV)
GO






