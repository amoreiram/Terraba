using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using terraba.api.seguridad.Models;

using Dapper;

namespace terraba.api.seguridad
{
    public class AuthRepository : IDisposable
    {
        private AuthContext _ctx;

        //private UserManager<IdentityUser> _userManager;
        private UserManager<User> _userManager;

        public AuthRepository()
        {
            _ctx = new AuthContext();
            //_userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(_ctx));
            _userManager = new UserManager<User>(new UserStore<User>(_ctx));
        }

        public async Task<IdentityResult> RegisterUser(UserModel userModel)
        {
            /*IdentityUser user = new IdentityUser
            {
                UserName = userModel.Email,
                Email = userModel.Email,
                Nombre = userModel.Nombre,
                Apellidos = userModel.Apellidos,

            };*/

            User user = new User
            {
                UserName = userModel.Email,
                Email = userModel.Email,
                Nombre = userModel.Nombre,
                Apellidos = userModel.Apellidos,
                Institucion = userModel.Institucion
            };

            var result = await _userManager.CreateAsync(user, userModel.Password);

            return result;
        }

        public async Task<IdentityUser> FindUser(string userName, string password)
        {
            IdentityUser user = await _userManager.FindAsync(userName, password);

            return user;
        }

        public IQueryable<dynamic> GetUsers()
        {
            return _ctx.Database.Connection.Query("select email, nombre, apellidos, institucion from Users").AsQueryable();            
        }

        public void Dispose()
        {
            _ctx.Dispose();
            _userManager.Dispose();

        }
    }
}