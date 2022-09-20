using Application.Assignments;
using Application.Proposals;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Candidate, Candidate>();
            CreateMap<Assignment, AssignmentDto>();
            CreateMap<Proposal, ProposalDto>();
        }
    }
}