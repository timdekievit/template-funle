using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Candidate
    {

        public Guid Id { get; set; }
        public string Email { get; set; }

        public string FirstName { get; set; }

        public string Prefix { get; set; }

        public string Lastname { get; set; }

        public bool? Searching { get; set; }

        public int? Rate { get; set; }

        public int? Hours { get; set; }

        public string Role { get; set; }

        public DateTime? Availability { get; set; }

        public string PhoneNumber { get; set; }

        public string City { get; set; }

        public string FileName { get; set; }

        public bool? AgreedTermsAndConditions { get; set; }

        public DateTime? AgreedTermsAndConditionsDate { get; set; }

        public int? KvkNummer { get; set; }

        public int? AssignmentSearchRadius { get; set; }

        public Guid DiscountGuid { get; set; }

        public bool? Whatsapp { get; set; }

        public string DefaultMotivation { get; set; }
        
    }
}