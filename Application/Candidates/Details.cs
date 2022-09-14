using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Candidates
{
public class Details
    {
        public class Query : IRequest<Candidate>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Candidate>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Candidate> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Candidates.FindAsync(request.Id);
            }
        }
    }
}