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
    [EnableCors(origins: "http://localhost:55535", headers: "*", methods: "*")]
    public class TiposContratacionController : ApiController
    {
        private TerrabaContext db = new TerrabaContext();

        // GET: api/TiposContratacion
        public IQueryable<TipoContratacion> GetTipoContratacions()
        {
            return db.TipoContratacions;
        }

        // GET: api/TiposContratacion/5
        [ResponseType(typeof(TipoContratacion))]
        public async Task<IHttpActionResult> GetTipoContratacion(string id)
        {
            TipoContratacion tipoContratacion = await db.TipoContratacions.FindAsync(id);
            if (tipoContratacion == null)
            {
                return NotFound();
            }

            return Ok(tipoContratacion);
        }

        // PUT: api/TiposContratacion/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTipoContratacion(string id, TipoContratacion tipoContratacion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tipoContratacion.Id)
            {
                return BadRequest();
            }

            db.Entry(tipoContratacion).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoContratacionExists(id))
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

        // POST: api/TiposContratacion
        [ResponseType(typeof(TipoContratacion))]
        public async Task<IHttpActionResult> PostTipoContratacion(TipoContratacion tipoContratacion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TipoContratacions.Add(tipoContratacion);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TipoContratacionExists(tipoContratacion.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = tipoContratacion.Id }, tipoContratacion);
        }

        // DELETE: api/TiposContratacion/5
        [ResponseType(typeof(TipoContratacion))]
        public async Task<IHttpActionResult> DeleteTipoContratacion(string id)
        {
            TipoContratacion tipoContratacion = await db.TipoContratacions.FindAsync(id);
            if (tipoContratacion == null)
            {
                return NotFound();
            }

            db.TipoContratacions.Remove(tipoContratacion);
            await db.SaveChangesAsync();

            return Ok(tipoContratacion);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TipoContratacionExists(string id)
        {
            return db.TipoContratacions.Count(e => e.Id == id) > 0;
        }
    }
}