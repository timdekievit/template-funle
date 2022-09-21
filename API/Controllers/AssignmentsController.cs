using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Assignments;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AssignmentsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<AssignmentDto>>> getAssignments() 
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AssignmentDto>> getCandidate(Guid id) 
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpGet("proposals")]
        public async Task<ActionResult<List<AssignmentDto>>> getAssignmentsWithProposals() 
        {
            return await Mediator.Send(new ListProposals.Query());
        }
    }
}