--- Tablas con 0 registros
use comprared
go

CREATE TABLE #counts
(
    table_name varchar(255),
    row_count int
)

EXEC sp_MSForEachTable @command1='INSERT #counts (table_name, row_count) SELECT ''?'', COUNT(*) FROM ?'
SELECT table_name, row_count FROM #counts ORDER BY row_count DESC

---

--- Borrar tablas con 0 registros
use comprared
go

select * into #borrar from #counts where row_count = 0
declare @tabla varchar(150)
while ((select count(*) from #borrar) > 0)
begin
    set rowcount 1
	  select @tabla = table_name from #borrar
	set rowcount 0

    EXEC('drop table ' + @tabla)	

    set rowcount 1
	  delete #borrar where table_name = @tabla
	set rowcount 0

end
DROP TABLE #borrar

---

create database terraba
go

use comprared

select * into terraba.dbo.proveedores from proveedor

alter table terraba.dbo.proveedores
add tipo_persona smallint null

alter table terraba.dbo.proveedores
add CCSS bit

update terraba.dbo.proveedores
set tipo_persona = a.TIPO_PERSONA, ccss=1
from PROVEEDOR_CCSS a, terraba.dbo.proveedores b
where a.NUMPROV = b.NUMPROV
select * from terraba.dbo.proveedores where ccss = 1

use terraba
go

INSERT INTO [dbo].[proveedores]
           ([NUMPROV]
           ,[NOMBPROV]
           ,[tipo_persona]
           ,[CCSS])     
           select * from COMPRARED.dbo.PROVEEDOR_CCSS where NUMPROV not in (select numprov from COMPRARED.dbo.proveedor)
GO

ALTER TABLE proveedores
ADD CONSTRAINT pk_proveedores PRIMARY KEY(numprov)

select count(*) from proveedores

