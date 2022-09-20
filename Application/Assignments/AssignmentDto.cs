using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Proposals;
using Domain;

namespace Application.Assignments
{
    public class AssignmentDto
    {
        public Guid Id { get; set; }
        public string Source { get; set; }
        public string SourceId { get; set; }
        public string Customer { get; set; }
        public int? CategoryId { get; set; }
        public ICollection<ProposalDto> Proposals { get; set; } = new List<ProposalDto>();
        public int? Rate { get; set; }
        public int? Hours { get; set; }
        public string Role { get; set; }
        public string Description { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public DateTime? SubmitDate { get; set; }
        public bool? WithProlongation { get; set; }
        public string City { get; set; }
        public string Notes { get; set; }
        public string Title { get; set; }

    }
}