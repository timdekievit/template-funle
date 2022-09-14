using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Assignments
{
public class Details
    {
        public class Query : IRequest<Assignment>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Assignment>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Assignment> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Assignments.FindAsync(request.Id);
            }
        }
    }
}