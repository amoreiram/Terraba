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
    public class TiposImputacionController : ApiController
    {
        private TerrabaContext db = new TerrabaContext();

        // GET: api/TipoImputacions
        public IQueryable<TipoImputacion> GetTiposImputacion()
        {
            return db.TiposImputacion;
        }

        // GET: api/TipoImputacions/5
        [ResponseType(typeof(TipoImputacion))]
        public async Task<IHttpActionResult> GetTipoImputacion(int id)
        {
            TipoImputacion tipoImputacion = await db.TiposImputacion.FindAsync(id);
            if (tipoImputacion == null)
            {
                return NotFound();
            }

            return Ok(tipoImputacion);
        }

        // PUT: api/TipoImputacions/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTipoImputacion(int id, TipoImputacion tipoImputacion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tipoImputacion.Id)
            {
                return BadRequest();
            }

            db.Entry(tipoImputacion).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoImputacionExists(id))
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

        // POST: api/TipoImputacions
        [ResponseType(typeof(TipoImputacion))]
        public async Task<IHttpActionResult> PostTipoImputacion(TipoImputacion tipoImputacion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TiposImputacion.Add(tipoImputacion);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = tipoImputacion.Id }, tipoImputacion);
        }

        // DELETE: api/TipoImputacions/5
        [ResponseType(typeof(TipoImputacion))]
        public async Task<IHttpActionResult> DeleteTipoImputacion(int id)
        {
            TipoImputacion tipoImputacion = await db.TiposImputacion.FindAsync(id);
            if (tipoImputacion == null)
            {
                return NotFound();
            }

            db.TiposImputacion.Remove(tipoImputacion);
            await db.SaveChangesAsync();

            return Ok(tipoImputacion);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TipoImputacionExists(int id)
        {
            return db.TiposImputacion.Count(e => e.Id == id) > 0;
        }
    }
}