using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace terraba.api.Models
{
    [Table("tipos_de_contrato")] 
    public class Modelos
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

    [Table("formas_de_pago")]
    public class FormasPago
    {
        [Column("FORMA_PAGO")]
        public string Id { get; set; }
        public string Descripcion { get; set; }        
    }

    [Table("catalogo")]
    public class Catalogo
    {
        [Column("CATALOGO")]
        public string Id { get; set; }
        public string Descripcion { get; set; }        
    }

    [Table("fuentes_de_financiamiento")]
    public class FuenteFinanciamiento
    {
        [Column("Tipo_Fuente")]
        public string Id { get; set; }
        public string Descripcion { get; set; }
    }

    [Table("tipos_de_contratacion")]
    public class TipoContratacion
    {
        [Column("TIPOTRAM")]
        public string Id { get; set; }

        [Column("DESCTIPO")]
        public string Descripcion { get; set; }

        public int Orden { get; set; }
    }

    [Table("aerolineas")]
    public class Aerolinea
    {     
        public int Id { get; set; }        
        public string Descripcion { get; set; }
    }    

    [Table("fondos")]
    public class Fondo
    {
        public int Id { get; set; }
               
        public string Codigo { get; set; }
                
        public string Descripcion { get; set; }
    }

    [Table("tipos_solicitud_pedido")]
    public class TipoSolicitudPedido
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
                
        [Column("id_tipo_imputacion")]
        public int? IdTipoImputacion { get; set; }

 /*       [ForeignKey("IdTipoImputacion")]
        public TipoImputacion TipoImputacion { get; set; } */
    }

    [Table("tipos_imputacion")]
    public class TipoImputacion
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "El código no puede quedar nulo")]
        public string Codigo { get; set; }

        [Required(ErrorMessage = "La descripcion no puede ser nula")]
        public string Descripcion { get; set; }
    }

    public class TerrabaContext : DbContext
    {
        public DbSet<Modelos> TiposContrato { get; set; }
        public DbSet<TipoGarantia> TiposGarantia { get; set; }
        public System.Data.Entity.DbSet<terraba.api.Models.Catalogo> Catalogos { get; set; }
        public System.Data.Entity.DbSet<terraba.api.Models.FormasPago> FormasPago { get; set; }
        public System.Data.Entity.DbSet<terraba.api.Models.FuenteFinanciamiento> FuentesFinanciamiento { get; set; }
        public System.Data.Entity.DbSet<terraba.api.Models.TipoContratacion> TipoContratacions { get; set; }
        public System.Data.Entity.DbSet<terraba.api.Models.Aerolinea> Aerolineas { get; set; }
        public System.Data.Entity.DbSet<terraba.api.Models.TipoImputacion> TiposImputacion { get; set; }
        public System.Data.Entity.DbSet<terraba.api.Models.Fondo> Fondos { get; set; }

        public System.Data.Entity.DbSet<terraba.api.Models.TipoSolicitudPedido> TiposSolicitudPedido { get; set; }
    }
}