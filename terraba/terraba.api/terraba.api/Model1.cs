namespace terraba.api
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=Model11")
        {
        }

        public virtual DbSet<tipos_solicitud_pedido> tipos_solicitud_pedido { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<tipos_solicitud_pedido>()
                .Property(e => e.descripcion)
                .IsUnicode(false);
        }
    }
}
