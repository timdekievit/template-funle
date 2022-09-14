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
        public async Task<ActionResult<List<Assignment>>> getAssignments() 
        {
            return await Mediator.Send(new List.Query());
        }
    }
}