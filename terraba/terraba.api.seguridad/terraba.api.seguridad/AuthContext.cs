using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using terraba.api.seguridad.Models;

namespace terraba.api.seguridad
{
    public class AuthContext : IdentityDbContext<User>
    {
        //public  DBSet| Usuarios { get; set; }        

        public AuthContext()
            : base("AuthContext")
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder); // This needs to go before the other rules!

            modelBuilder.Entity<User>().ToTable("Users");
            modelBuilder.Entity<Role>().ToTable("Roles");
            modelBuilder.Entity<UserRole>().ToTable("UserRoles");
            modelBuilder.Entity<UserLogin>().ToTable("UserLogins");
            modelBuilder.Entity<UserClaim>().ToTable("UserClaims");

            modelBuilder.Entity<User>().HasKey(l => l.Id);
            modelBuilder.Entity<UserLogin>().HasKey(l => l.UserId);
            modelBuilder.Entity<Role>().HasKey(r => r.Id);
            modelBuilder.Entity<UserRole>().HasKey(r => new { r.RoleId, r.UserId });
        }
    }
}