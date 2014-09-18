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
    public class FormasPagoController : ApiController
    {
        private TerrabaContext db = new TerrabaContext();

        // GET: api/FormasPagoes
        public IQueryable<FormasPago> GetFormasPago()
        {
            return db.FormasPago;
        }

        // GET: api/FormasPagoes/5
        [ResponseType(typeof(FormasPago))]
        public async Task<IHttpActionResult> GetFormasPago(string id)
        {
            FormasPago formasPago = await db.FormasPago.FindAsync(id);
            if (formasPago == null)
            {
                return NotFound();
            }

            return Ok(formasPago);
        }

        // PUT: api/FormasPagoes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutFormasPago(string id, FormasPago formasPago)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != formasPago.Id)
            {
                return BadRequest();
            }

            db.Entry(formasPago).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FormasPagoExists(id))
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

        // POST: api/FormasPagoes
        [ResponseType(typeof(FormasPago))]
        public async Task<IHttpActionResult> PostFormasPago(FormasPago formasPago)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.FormasPago.Add(formasPago);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (FormasPagoExists(formasPago.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = formasPago.Id }, formasPago);
        }

        // DELETE: api/FormasPagoes/5
        [ResponseType(typeof(FormasPago))]
        public async Task<IHttpActionResult> DeleteFormasPago(string id)
        {
            FormasPago formasPago = await db.FormasPago.FindAsync(id);
            if (formasPago == null)
            {
                return NotFound();
            }

            db.FormasPago.Remove(formasPago);
            await db.SaveChangesAsync();

            return Ok(formasPago);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FormasPagoExists(string id)
        {
            return db.FormasPago.Count(e => e.Id == id) > 0;
        }
    }
}