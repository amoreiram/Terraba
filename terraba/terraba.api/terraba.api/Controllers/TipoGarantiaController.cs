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
using System.Web.Http.Description;
using terraba.api.Models;

namespace terraba.api.Controllers
{
    public class TipoGarantiaController : ApiController
    {
        private TerrabaContext db = new TerrabaContext();

        // GET: api/TipoGarantia
        public IQueryable<TipoGarantia> GetTiposGarantia()
        {
            return db.TiposGarantia;
        }

        // GET: api/TipoGarantia/5
        [ResponseType(typeof(TipoGarantia))]
        public async Task<IHttpActionResult> GetTipoGarantia(string id)
        {
            TipoGarantia tipoGarantia = await db.TiposGarantia.FindAsync(id);
            if (tipoGarantia == null)
            {
                return NotFound();
            }

            return Ok(tipoGarantia);
        }

        // PUT: api/TipoGarantia/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTipoGarantia(string id, TipoGarantia tipoGarantia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tipoGarantia.Id)
            {
                return BadRequest();
            }

            db.Entry(tipoGarantia).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoGarantiaExists(id))
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

        // POST: api/TipoGarantia
        [ResponseType(typeof(TipoGarantia))]
        public async Task<IHttpActionResult> PostTipoGarantia(TipoGarantia tipoGarantia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TiposGarantia.Add(tipoGarantia);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TipoGarantiaExists(tipoGarantia.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = tipoGarantia.Id }, tipoGarantia);
        }

        // DELETE: api/TipoGarantia/5
        [ResponseType(typeof(TipoGarantia))]
        public async Task<IHttpActionResult> DeleteTipoGarantia(string id)
        {
            TipoGarantia tipoGarantia = await db.TiposGarantia.FindAsync(id);
            if (tipoGarantia == null)
            {
                return NotFound();
            }

            db.TiposGarantia.Remove(tipoGarantia);
            await db.SaveChangesAsync();

            return Ok(tipoGarantia);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TipoGarantiaExists(string id)
        {
            return db.TiposGarantia.Count(e => e.Id == id) > 0;
        }
    }
}