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

            await context.Candidates.AddRangeAsync(candidates);
            await context.SaveChangesAsync();
        }
    }
}