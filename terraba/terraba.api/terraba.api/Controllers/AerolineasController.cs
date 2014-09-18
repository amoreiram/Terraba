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
    public class AerolineasController : ApiController
    {
        private TerrabaContext db = new TerrabaContext();

        // GET: api/Aerolineas
        public IQueryable<Aerolinea> GetAerolineas()
        {
            return db.Aerolineas;
        }

        // GET: api/Aerolineas/5
        [ResponseType(typeof(Aerolinea))]
        public async Task<IHttpActionResult> GetAerolinea(int id)
        {
            Aerolinea aerolinea = await db.Aerolineas.FindAsync(id);
            if (aerolinea == null)
            {
                return NotFound();
            }

            return Ok(aerolinea);
        }

        // PUT: api/Aerolineas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAerolinea(int id, Aerolinea aerolinea)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != aerolinea.Id)
            {
                return BadRequest();
            }

            db.Entry(aerolinea).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AerolineaExists(id))
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

        // POST: api/Aerolineas
        [ResponseType(typeof(Aerolinea))]
        public async Task<IHttpActionResult> PostAerolinea(Aerolinea aerolinea)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Aerolineas.Add(aerolinea);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AerolineaExists(aerolinea.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = aerolinea.Id }, aerolinea);
        }

        // DELETE: api/Aerolineas/5
        [ResponseType(typeof(Aerolinea))]
        public async Task<IHttpActionResult> DeleteAerolinea(int id)
        {
            Aerolinea aerolinea = await db.Aerolineas.FindAsync(id);
            if (aerolinea == null)
            {
                return NotFound();
            }

            db.Aerolineas.Remove(aerolinea);
            await db.SaveChangesAsync();

            return Ok(aerolinea);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AerolineaExists(int id)
        {
            return db.Aerolineas.Count(e => e.Id == id) > 0;
        }
    }
}