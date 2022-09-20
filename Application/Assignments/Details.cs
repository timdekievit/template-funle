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
    public class Details
    {
        public class Query : IRequest<AssignmentDto>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, AssignmentDto>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<AssignmentDto> Handle(Query request, CancellationToken cancellationToken)
            {
                var assignment = await _context.Assignments
                .Include(p => p.Proposals)
                .ThenInclude(c => c.Candidate)
                .FirstOrDefaultAsync(x => x.Id == request.Id);

                var assignmentToReturn = _mapper.Map<AssignmentDto>(assignment);

                return assignmentToReturn;
            }
        }
    }
}