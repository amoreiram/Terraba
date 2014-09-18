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
    public class TiposContratoController : ApiController
    {
        private TerrabaContext db = new TerrabaContext();

        // GET: api/TiposContrato
        public IQueryable<Modelos> GetTiposContrato()
        {
            //return Json<TipoContrato>(db.TiposContrato);
            
            return db.TiposContrato;
        }

        // GET: api/TiposContrato/5
        [ResponseType(typeof(Modelos))]
        public async Task<IHttpActionResult> GetTipoContrato(string id)
        {
            Modelos tipoContrato = await db.TiposContrato.FindAsync(id);
            if (tipoContrato == null)
            {
                return NotFound();
            }

            return Ok(tipoContrato);
        }

        // PUT: api/TiposContrato/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTipoContrato(string id, Modelos tipoContrato)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tipoContrato.Id)
            {
                return BadRequest();
            }

            db.Entry(tipoContrato).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoContratoExists(id))
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

        // POST: api/TiposContrato
        [ResponseType(typeof(Modelos))]
        public async Task<IHttpActionResult> PostTipoContrato(Modelos tipoContrato)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TiposContrato.Add(tipoContrato);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TipoContratoExists(tipoContrato.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = tipoContrato.Id }, tipoContrato);
        }

        // DELETE: api/TiposContrato/5
        [ResponseType(typeof(Modelos))]
        public async Task<IHttpActionResult> DeleteTipoContrato(string id)
        {
            Modelos tipoContrato = await db.TiposContrato.FindAsync(id);
            if (tipoContrato == null)
            {
                return NotFound();
            }

            db.TiposContrato.Remove(tipoContrato);
            await db.SaveChangesAsync();

            return Ok(tipoContrato);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TipoContratoExists(string id)
        {
            return db.TiposContrato.Count(e => e.Id == id) > 0;
        }
    }
}