using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Assignments
{
    public class List
    {
        public class Query : IRequest<List<AssignmentDto>> { }

        public class Handler : IRequestHandler<Query, List<AssignmentDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<List<AssignmentDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var assignments = await _context.Assignments
                .Include(p => p.Proposals)
                .ThenInclude(c => c.Candidate)
                .ToListAsync();

                var assignmentsToReturn = _mapper.Map<List<AssignmentDto>>(assignments);

                return assignmentsToReturn;
            }
        }
    }
}