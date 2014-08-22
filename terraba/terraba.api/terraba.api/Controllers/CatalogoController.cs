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
    public class CatalogoController : ApiController
    {
        private TerrabaContext db = new TerrabaContext();

        // GET: api/Catalogo
        public IQueryable<Catalogo> GetCatalogos()
        {
            return db.Catalogos;
        }

        // GET: api/Catalogo/5
        [ResponseType(typeof(Catalogo))]
        public async Task<IHttpActionResult> GetCatalogo(string id)
        {
            Catalogo catalogo = await db.Catalogos.FindAsync(id);
            if (catalogo == null)
            {
                return NotFound();
            }

            return Ok(catalogo);
        }

        // PUT: api/Catalogo/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutCatalogo(string id, Catalogo catalogo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != catalogo.Id)
            {
                return BadRequest();
            }

            db.Entry(catalogo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CatalogoExists(id))
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

        // POST: api/Catalogo
        [ResponseType(typeof(Catalogo))]
        public async Task<IHttpActionResult> PostCatalogo(Catalogo catalogo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Catalogos.Add(catalogo);

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CatalogoExists(catalogo.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = catalogo.Id }, catalogo);
        }

        // DELETE: api/Catalogo/5
        [ResponseType(typeof(Catalogo))]
        public async Task<IHttpActionResult> DeleteCatalogo(string id)
        {
            Catalogo catalogo = await db.Catalogos.FindAsync(id);
            if (catalogo == null)
            {
                return NotFound();
            }

            db.Catalogos.Remove(catalogo);
            await db.SaveChangesAsync();

            return Ok(catalogo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CatalogoExists(string id)
        {
            return db.Catalogos.Count(e => e.Id == id) > 0;
        }
    }
}