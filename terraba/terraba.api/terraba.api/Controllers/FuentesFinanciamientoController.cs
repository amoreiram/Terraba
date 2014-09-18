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
    public class FuentesFinanciamientoController : ApiController
    {
        private TerrabaContext db = new TerrabaContext();

        // GET: api/FuentesFinanciamiento
        public IQueryable<FuenteFinanciamiento> GetFuentesFinanciamiento()
        {
            return db.FuentesFinanciamiento;
        }

        // GET: api/FuentesFinanciamiento/5
        [ResponseType(typeof(FuenteFinanciamiento))]
        public async Task<IHttpActionResult> GetFuenteFinanciamiento(string id)
        {
            FuenteFinanciamiento fuenteFinanciamiento = await db.FuentesFinanciamiento.FindAsync(id);
            if (fuenteFinanciamiento == null)
            {
                return NotFound();
            }

            return Ok(fuenteFinanciamiento);
        }

        // PUT: api/FuentesFinanciamiento/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutFuenteFinanciamiento(string id, FuenteFinanciamiento fuenteFinanciamiento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != fuenteFinanciamiento.Id)
            {
                return BadRequest();
            }

            db.Entry(fuenteFinanciamiento).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FuenteFinanciamientoExists(id))
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

        // POST: api/FuentesFinanciamiento
        [ResponseType(typeof(FuenteFinanciamiento))]
        public async Task<IHttpActionResult> PostFuenteFinanciamiento(FuenteFinanciamiento fuenteFinanciamiento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.FuentesFinanciamiento.Add(fuenteFinanciamiento);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (FuenteFinanciamientoExists(fuenteFinanciamiento.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = fuenteFinanciamiento.Id }, fuenteFinanciamiento);
        }

        // DELETE: api/FuentesFinanciamiento/5
        [ResponseType(typeof(FuenteFinanciamiento))]
        public async Task<IHttpActionResult> DeleteFuenteFinanciamiento(string id)
        {
            FuenteFinanciamiento fuenteFinanciamiento = await db.FuentesFinanciamiento.FindAsync(id);
            if (fuenteFinanciamiento == null)
            {
                return NotFound();
            }

            db.FuentesFinanciamiento.Remove(fuenteFinanciamiento);
            await db.SaveChangesAsync();

            return Ok(fuenteFinanciamiento);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FuenteFinanciamientoExists(string id)
        {
            return db.FuentesFinanciamiento.Count(e => e.Id == id) > 0;
        }
    }
}