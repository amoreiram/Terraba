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
    public class TiposGarantiaTimbreController : ApiController
    {
        private TerrabaContext db = new TerrabaContext();

        // GET: api/TiposGarantiaTimbre
        public IQueryable<TipoGarantiaTimbre> GetTiposGarantiaTimbre()
        {
            return db.TiposGarantiaTimbre;
        }

        // GET: api/TiposGarantiaTimbre/5
        [ResponseType(typeof(TipoGarantiaTimbre))]
        public async Task<IHttpActionResult> GetTipoGarantiaTimbre(int id)
        {
            TipoGarantiaTimbre tipoGarantiaTimbre = await db.TiposGarantiaTimbre.FindAsync(id);
            if (tipoGarantiaTimbre == null)
            {
                return NotFound();
            }

            return Ok(tipoGarantiaTimbre);
        }

        // PUT: api/TiposGarantiaTimbre/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTipoGarantiaTimbre(int id, TipoGarantiaTimbre tipoGarantiaTimbre)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tipoGarantiaTimbre.Id)
            {
                return BadRequest();
            }

            db.Entry(tipoGarantiaTimbre).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoGarantiaTimbreExists(id))
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

        // POST: api/TiposGarantiaTimbre
        [ResponseType(typeof(TipoGarantiaTimbre))]
        public async Task<IHttpActionResult> PostTipoGarantiaTimbre(TipoGarantiaTimbre tipoGarantiaTimbre)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TiposGarantiaTimbre.Add(tipoGarantiaTimbre);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = tipoGarantiaTimbre.Id }, tipoGarantiaTimbre);
        }

        // DELETE: api/TiposGarantiaTimbre/5
        [ResponseType(typeof(TipoGarantiaTimbre))]
        public async Task<IHttpActionResult> DeleteTipoGarantiaTimbre(int id)
        {
            TipoGarantiaTimbre tipoGarantiaTimbre = await db.TiposGarantiaTimbre.FindAsync(id);
            if (tipoGarantiaTimbre == null)
            {
                return NotFound();
            }

            db.TiposGarantiaTimbre.Remove(tipoGarantiaTimbre);
            await db.SaveChangesAsync();

            return Ok(tipoGarantiaTimbre);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TipoGarantiaTimbreExists(int id)
        {
            return db.TiposGarantiaTimbre.Count(e => e.Id == id) > 0;
        }
    }
}