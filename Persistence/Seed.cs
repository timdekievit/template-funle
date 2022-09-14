using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Candidates.Any()) return;
            
            var candidates = new List<Candidate>
            {
                new Candidate
                {
                    Email = "timdekievit@hotmail.com",
                    FirstName = "Tim",
                    Prefix = "de",
                    Lastname = "Kievit",
                    Role = "Programmer",
                    Availability = DateTime.Now,
                    PhoneNumber = "0681568748",
                    City = "Wassenaar",
                    FileName = "tim_cv",
                    AgreedTermsAndConditions = true,
                    AgreedTermsAndConditionsDate = DateTime.Now,
                    DiscountGuid = Guid.NewGuid(),
                    DefaultMotivation = "geld"

                },
            };

            var assignments = new List<Assignment>
            {
                new Assignment
                {
                    Source = "Abn Amro",
                    SourceId = "Abn",
                    Customer = "Abn Amro",
                    Role = "Scrum Master",
                    Description = "We zoeken iemand met 50 jaar ervaring als Scrum Master",
                    StartDate = DateTime.Now.AddMonths(2),
                    EndDate = DateTime.Now.AddMonths(6),
                    SubmitDate = DateTime.Now,
                    City = "Den Haag",
                    Notes = "geen",
                    Title = "Scrum Master voor Abn Amro"
                },
                new Assignment
                {
                    Source = "Ing",
                    SourceId = "ING",
                    Customer = "Ing",
                    Role = "Scrum Master",
                    Description = "We zoeken iemand met 50 jaar ervaring als Scrum Master",
                    StartDate = DateTime.Now.AddMonths(2),
                    EndDate = DateTime.Now.AddMonths(6),
                    SubmitDate = DateTime.Now,
                    City = "Den Haag",
                    Notes = "geen",
                    Title = "Scrum Master voor ING"
                },
            };

            await context.Candidates.AddRangeAsync(candidates);
            await context.Assignments.AddRangeAsync(assignments);
            await context.SaveChangesAsync();
        }
    }
}