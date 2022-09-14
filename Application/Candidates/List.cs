using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Candidates
{
    public class List
    {
        public class Query : IRequest<List<Candidate>> { }

        public class Handler : IRequestHandler<Query, List<Candidate>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Candidate>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Candidates.ToListAsync();
            }
        }
    }
}