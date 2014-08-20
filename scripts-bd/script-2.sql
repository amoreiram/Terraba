use comprared

SELECT [NUMPROV]
      ,[ID_REGISTRO]
      ,[APDO] into terraba.dbo.apartados_postales_proveedores
  FROM [COMPRARED].[dbo].[PROVEEDOR_APDOS]

SELECT [NUMPROV]
      ,[ID_REGISTRO]
      ,[EMAIL]
      ,[PORUSUARIO]
      ,[OCULTO] into terraba.dbo.email_proveedores
  FROM [COMPRARED].[dbo].[PROVEEDOR_EMAIL]

SELECT [NUMPROV]
      ,[CODMERC]
      ,[CATALOGO]
      ,[NORMA_CALIDAD] into terraba.dbo.mercancias_x_proveedor
  FROM [COMPRARED].[dbo].[PROV_MERC]

  
SELECT [ID_MINISTERIO]
      ,[NUMPROV] into terraba.dbo.proveedores_x_institucion
  FROM [COMPRARED].[dbo].[PROVEEDOR_MINISTERIO]

SELECT [ID_MINISTERIO]
      ,[DESCRIPCION]
      ,[ID_REAL_MINISTERIO]
      ,[COD_SICA]
      ,[COD_CI]
      ,[COD_CI_SIGAF]
      ,[GOBIERNO_CENTRAL]
      ,[cedula]
      ,[ID_REGISTRO]
      ,[MOSTRAR]
      ,[SOCIEDAD] into terraba.dbo.instituciones
  FROM [COMPRARED].[dbo].[MINISTERIO]

  
SELECT [NUMPROV]
      ,[OBSERVACION] into terraba.dbo.observaciones_x_proveedor
  FROM [COMPRARED].[dbo].[PROVEEDOR_OBSERVACIONES]

-- Agregar llave y fecha a las observaciones por proveedor y borrar observaciones sin texto

use terraba

alter table terraba.dbo.observaciones_x_proveedor
alter column observacion varchar(max)

delete terraba.dbo.observaciones_x_proveedor
where OBSERVACION = ''

alter table terraba.dbo.observaciones_x_proveedor
add id int identity primary key not null

alter table observaciones_x_proveedor
add fecha datetime null

