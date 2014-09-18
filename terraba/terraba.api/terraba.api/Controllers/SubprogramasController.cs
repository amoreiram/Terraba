using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using terraba.api.Models;
using Dapper;

namespace terraba.api.Controllers
{
    public class SubprogramasController : ApiController
    {
        TerrabaContext context = new TerrabaContext();

        // GET: api/Subprogramas
        public IEnumerable<dynamic> Get()
        {
            return context.Database.Connection.Query("select distinct id_subprograma + ' - ' + descripcion_subprograma as descripcion from dependencias where id_ministerio = 14 and id_subprograma <> '00'").AsEnumerable();
        }

        // GET: api/Subprogramas/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Subprogramas
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Subprogramas/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Subprogramas/5
        public void Delete(int id)
        {
        }
    }
}
