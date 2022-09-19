using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Proposals
{
    public class List
    {
        public class Query : IRequest<List<Proposal>> { }

        public class Handler : IRequestHandler<Query, List<Proposal>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Proposal>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Proposals.ToListAsync();
            }
        }
    }
}