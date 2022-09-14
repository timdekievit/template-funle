using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Candidates;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class CandidatesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Candidate>>> getCandidates() 
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Candidate>> getCandidate(Guid id) 
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditCandidate(Guid id, Candidate candidate)
        {
            candidate.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Candidate = candidate}));
        }
    }
}