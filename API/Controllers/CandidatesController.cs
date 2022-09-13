using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class CandidatesController : BaseApiController
    {
        private readonly DataContext _context;
        public CandidatesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Candidate>>> getCandidates() 
        {
            return await _context.Candidates.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Candidate>> getCandidate(Guid id) 
        {
            return await _context.Candidates.FindAsync(id);
        }
    }
}