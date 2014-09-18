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
    public class ProgramasController : ApiController
    {
        TerrabaContext context = new TerrabaContext();
        // GET: api/Programas
        public IEnumerable<dynamic> Get()
        {
            return context.Database.Connection.Query("select distinct id_programa + ' - ' + descripcion_programa as descripcion from dependencias where id_ministerio = 14").AsEnumerable();
        }        

        // GET: api/Programas/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Programas
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Programas/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Programas/5
        public void Delete(int id)
        {
        }
    }
}
