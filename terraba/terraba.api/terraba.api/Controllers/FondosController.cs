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
    public class FondosController : ApiController
    {
        private TerrabaContext db = new TerrabaContext();

        // GET: api/Fondos
        public IQueryable<Fondo> GetFondos()
        {
            return db.Fondos;
        }

        // GET: api/Fondos/5
        [ResponseType(typeof(Fondo))]
        public async Task<IHttpActionResult> GetFondo(int id)
        {
            Fondo fondo = await db.Fondos.FindAsync(id);
            if (fondo == null)
            {
                return NotFound();
            }

            return Ok(fondo);
        }

        // PUT: api/Fondos/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutFondo(int id, Fondo fondo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != fondo.Id)
            {
                return BadRequest();
            }

            db.Entry(fondo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FondoExists(id))
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

        // POST: api/Fondos
        [ResponseType(typeof(Fondo))]
        public async Task<IHttpActionResult> PostFondo(Fondo fondo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Fondos.Add(fondo);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (FondoExists(fondo.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = fondo.Id }, fondo);
        }

        // DELETE: api/Fondos/5
        [ResponseType(typeof(Fondo))]
        public async Task<IHttpActionResult> DeleteFondo(string id)
        {
            Fondo fondo = await db.Fondos.FindAsync(id);
            if (fondo == null)
            {
                return NotFound();
            }

            db.Fondos.Remove(fondo);
            await db.SaveChangesAsync();

            return Ok(fondo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FondoExists(int id)
        {
            return db.Fondos.Count(e => e.Id == id) > 0;
        }
    }
}