using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Candidate> Candidates { get; set; }
        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<Proposal> Proposals { get; set; }

        // protected override void OnModelCreating(ModelBuilder builder)
        // {
        //     base.OnModelCreating(builder);

        //     builder.Entity<Proposal>(x => x.HasKey(p => new { p.CandidateId, p.AssignmentId }));

        //     builder.Entity<Proposal>()
        //         .HasOne(c => c.Candidate);

        //     builder.Entity<Proposal>()
        //         .HasOne(a => a.Assignment);

        //     builder.Entity<Assignment>()
        //         .HasMany(p => p.Proposals);
        // }

    }


}