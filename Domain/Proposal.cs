using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{

        public enum ProposalStatus
    {
        Created,
        Declined,
        Accepted,
        Submitted,
        Interview,
        Rejected,
        Hired,
        Expired,
    }

    public class Proposal
    {
        public Guid Id { get; set; }

        public Guid AssignmentId { get; set; }

        public Assignment Assignment { get; set; }

        public Guid CandidateId { get; set; }

        public Candidate Candidate { get; set; }

        public ProposalStatus Status { get; set; }

        public string Source { get; set; }

        public bool Match { get; set; }

        public DateTime? MatchDate { get; set; }

        public bool Done { get; set; }

        public string RejectedReason { get; set; }

        public DateTime? CreationDate { get; set; }

        public DateTime? SubmitDate { get; set; }

        public DateTime? InterviewDate { get; set; }

        public string InterviewLocation { get; set; }

        public DateTime? HiredDate { get; set; }

        public DateTime? IsRead { get; set; }
    }
}