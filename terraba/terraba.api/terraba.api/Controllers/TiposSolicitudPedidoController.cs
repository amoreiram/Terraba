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
    public class TiposSolicitudPedidoController : ApiController
    {
        private TerrabaContext db = new TerrabaContext();

        // GET: api/TiposSolicitudPedido
        public IQueryable<TipoSolicitudPedido> GetTiposSolicitudPedido()
        {
            return db.TiposSolicitudPedido;//.Include(t => t.TipoImputacion);
        }

        // GET: api/TipoSolicitudPedidoes/5
        [ResponseType(typeof(TipoSolicitudPedido))]
        public async Task<IHttpActionResult> GetTipoSolicitudPedido(int id)
        {
            TipoSolicitudPedido tipoSolicitudPedido = await db.TiposSolicitudPedido.FindAsync(id);
            if (tipoSolicitudPedido == null)
            {
                return NotFound();
            }

            return Ok(tipoSolicitudPedido);
        }

        // PUT: api/TipoSolicitudPedidoes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTipoSolicitudPedido(int id, TipoSolicitudPedido tipoSolicitudPedido)
        {
            
            // Ojo
            //tipoSolicitudPedido.IdTipoImputacion = tipoSolicitudPedido.TipoImputacion.Id;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tipoSolicitudPedido.Id)
            {
                return BadRequest();
            }

            db.Entry(tipoSolicitudPedido).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoSolicitudPedidoExists(id))
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

        // POST: api/TipoSolicitudPedidoes
        [ResponseType(typeof(TipoSolicitudPedido))]
        public async Task<IHttpActionResult> PostTipoSolicitudPedido(TipoSolicitudPedido tipoSolicitudPedido)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TiposSolicitudPedido.Add(tipoSolicitudPedido);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = tipoSolicitudPedido.Id }, tipoSolicitudPedido);
        }

        // DELETE: api/TipoSolicitudPedidoes/5
        [ResponseType(typeof(TipoSolicitudPedido))]
        public async Task<IHttpActionResult> DeleteTipoSolicitudPedido(int id)
        {
            TipoSolicitudPedido tipoSolicitudPedido = await db.TiposSolicitudPedido.FindAsync(id);
            if (tipoSolicitudPedido == null)
            {
                return NotFound();
            }

            db.TiposSolicitudPedido.Remove(tipoSolicitudPedido);
            await db.SaveChangesAsync();

            return Ok(tipoSolicitudPedido);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TipoSolicitudPedidoExists(int id)
        {
            return db.TiposSolicitudPedido.Count(e => e.Id == id) > 0;
        }
    }
}