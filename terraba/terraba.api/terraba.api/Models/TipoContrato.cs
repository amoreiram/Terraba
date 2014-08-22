using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace terraba.api.Models
{
    [Table("tipos_de_contrato")] 
    public class TipoContrato
    {
        [Column("ID_TIPO")] 
        public string Id { get; set; }
        public string Descripcion { get; set; }
    }

    [Table("tipos_de_garantia")]
    public class TipoGarantia
    {
        [Column("TIPO")] 
        public string Id { get; set; }
        public string Descripcion { get; set; }
        [Column("MIN_VIGENCIA")]
        public int VigenciaMinima { get; set; }
        [Column("MIN_PORCENTAJE")]
        public int PorcentajeMinimo { get; set; }
        [Column("MAX_PORCENTAJE")]
        public int PorcentajeMaximo { get; set; }
    }

    [Table("catalogo")]
    public class Catalogo
    {
        [Column("CATALOGO")]
        public string Id { get; set; }
        public string Descripcion { get; set; }        
    }

    public class TerrabaContext : DbContext
    {
        public DbSet<TipoContrato> TiposContrato { get; set; }
        public DbSet<TipoGarantia> TiposGarantia { get; set; }
        public System.Data.Entity.DbSet<terraba.api.Models.Catalogo> Catalogos { get; set; }
    }
}