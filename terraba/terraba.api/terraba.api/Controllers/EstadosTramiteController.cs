using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using terraba.api.Models;

namespace terraba.api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EstadosTramiteController : ApiController
    {
        private TerrabaContext db = new TerrabaContext();

        // GET: api/EstadosTramite
        public IQueryable<EstadoTramite> GetEstadosTramite()
        {
            return db.EstadosTramite;
        }

        // GET: api/EstadosTramite/5
        [ResponseType(typeof(EstadoTramite))]
        public async Task<IHttpActionResult> GetEstadoTramite(int id)
        {
            EstadoTramite estadoTramite = await db.EstadosTramite.FindAsync(id);
            if (estadoTramite == null)
            {
                return NotFound();
            }

            return Ok(estadoTramite);
        }

        // PUT: api/EstadosTramite/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEstadoTramite(int id, EstadoTramite estadoTramite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != estadoTramite.Id)
            {
                return BadRequest();
            }

            db.Entry(estadoTramite).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EstadoTramiteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/EstadosTramite
        [ResponseType(typeof(EstadoTramite))]
        public async Task<IHttpActionResult> PostEstadoTramite(EstadoTramite estadoTramite)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EstadosTramite.Add(estadoTramite);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = estadoTramite.Id }, estadoTramite);
        }

        // DELETE: api/EstadosTramite/5
        [ResponseType(typeof(EstadoTramite))]
        public async Task<IHttpActionResult> DeleteEstadoTramite(int id)
        {
            EstadoTramite estadoTramite = await db.EstadosTramite.FindAsync(id);
            if (estadoTramite == null)
            {
                return NotFound();
            }

            db.EstadosTramite.Remove(estadoTramite);
            await db.SaveChangesAsync();

            return Ok(estadoTramite);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EstadoTramiteExists(int id)
        {
            return db.EstadosTramite.Count(e => e.Id == id) > 0;
        }
    }
}