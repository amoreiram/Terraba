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
    public class TiposProcedimientoController : ApiController
    {
        private TerrabaContext db = new TerrabaContext();

        // GET: api/TiposProcedimiento
        public IQueryable<TipoProcedimiento> GetTiposProcedimiento()
        {
            return db.TiposProcedimiento;
        }

        // GET: api/TiposProcedimiento/5
        [ResponseType(typeof(TipoProcedimiento))]
        public async Task<IHttpActionResult> GetTipoProcedimiento(int id)
        {
            TipoProcedimiento tipoProcedimiento = await db.TiposProcedimiento.FindAsync(id);
            if (tipoProcedimiento == null)
            {
                return NotFound();
            }

            return Ok(tipoProcedimiento);
        }

        // PUT: api/TiposProcedimiento/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTipoProcedimiento(int id, TipoProcedimiento tipoProcedimiento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tipoProcedimiento.Id)
            {
                return BadRequest();
            }

            db.Entry(tipoProcedimiento).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoProcedimientoExists(id))
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

        // POST: api/TiposProcedimiento
        [ResponseType(typeof(TipoProcedimiento))]
        public async Task<IHttpActionResult> PostTipoProcedimiento(TipoProcedimiento tipoProcedimiento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TiposProcedimiento.Add(tipoProcedimiento);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = tipoProcedimiento.Id }, tipoProcedimiento);
        }

        // DELETE: api/TiposProcedimiento/5
        [ResponseType(typeof(TipoProcedimiento))]
        public async Task<IHttpActionResult> DeleteTipoProcedimiento(int id)
        {
            TipoProcedimiento tipoProcedimiento = await db.TiposProcedimiento.FindAsync(id);
            if (tipoProcedimiento == null)
            {
                return NotFound();
            }

            db.TiposProcedimiento.Remove(tipoProcedimiento);
            await db.SaveChangesAsync();

            return Ok(tipoProcedimiento);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TipoProcedimientoExists(int id)
        {
            return db.TiposProcedimiento.Count(e => e.Id == id) > 0;
        }
    }
}