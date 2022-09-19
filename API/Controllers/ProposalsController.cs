using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Proposals;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProposalsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Proposal>>> getProposals() 
        {
            return await Mediator.Send(new List.Query());
        }
    }
}