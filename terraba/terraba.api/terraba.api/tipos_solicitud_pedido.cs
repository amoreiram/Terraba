namespace terraba.api
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class tipos_solicitud_pedido
    {
        public int id { get; set; }

        [StringLength(150)]
        public string descripcion { get; set; }

        public int? id_tipo_imputacion { get; set; }
    }
}
