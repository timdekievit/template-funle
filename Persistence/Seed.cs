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
                new Assignment
                {
                    Source = "Deutsche Bank",
                    SourceId = "DSB",
                    Customer = "Dsb",
                    Role = "Scrum Master",
                    Description = "We zoeken iemand met 50 jaar ervaring als Scrum Master",
                    StartDate = DateTime.Now.AddMonths(2),
                    EndDate = DateTime.Now.AddMonths(6),
                    SubmitDate = DateTime.Now,
                    City = "Den Haag",
                    Notes = "geen",
                    Title = "Scrum Master voor DSB"
                },
                new Assignment
                {
                    Source = "JPMorgan",
                    SourceId = "JPM",
                    Customer = "Jpm",
                    Role = "Scrum Master",
                    Description = "We zoeken iemand met 50 jaar ervaring als Scrum Master",
                    StartDate = DateTime.Now.AddMonths(2),
                    EndDate = DateTime.Now.AddMonths(6),
                    SubmitDate = DateTime.Now,
                    City = "Den Haag",
                    Notes = "geen",
                    Title = "Scrum Master voor JPM"
                },
                new Assignment
                {
                    Source = "Bank of America",
                    SourceId = "BoA",
                    Customer = "Boa",
                    Role = "Scrum Master",
                    Description = "We zoeken iemand met 50 jaar ervaring als Scrum Master",
                    StartDate = DateTime.Now.AddMonths(2),
                    EndDate = DateTime.Now.AddMonths(6),
                    SubmitDate = DateTime.Now,
                    City = "Den Haag",
                    Notes = "geen",
                    Title = "Scrum Master voor BoA"
                },
                new Assignment
                {
                    Source = "Wells Fargo",
                    SourceId = "WF",
                    Customer = "WF",
                    Role = "Scrum Master",
                    Description = "We zoeken iemand met 50 jaar ervaring als Scrum Master",
                    StartDate = DateTime.Now.AddMonths(2),
                    EndDate = DateTime.Now.AddMonths(6),
                    SubmitDate = DateTime.Now,
                    City = "Den Haag",
                    Notes = "geen",
                    Title = "Scrum Master voor WF"
                },
                new Assignment
                {
                    Source = "Morgan Stanley",
                    SourceId = "MS",
                    Customer = "MS",
                    Role = "Scrum Master",
                    Description = "We zoeken iemand met 50 jaar ervaring als Scrum Master",
                    StartDate = DateTime.Now.AddMonths(2),
                    EndDate = DateTime.Now.AddMonths(6),
                    SubmitDate = DateTime.Now,
                    City = "Den Haag",
                    Notes = "geen",
                    Title = "Scrum Master voor MS"
                },
                new Assignment
                {
                    Source = "MacDonalds",
                    SourceId = "MC",
                    Customer = "MC",
                    Role = "Ontwikkelaar Java",
                    Description = "We zoeken iemand met 50 jaar ervaring als ontwikkelaar",
                    StartDate = DateTime.Now.AddMonths(2),
                    EndDate = DateTime.Now.AddMonths(6),
                    SubmitDate = DateTime.Now,
                    City = "Amsterdam",
                    Notes = "geen",
                    Title = "Onwikkelaar Java MacDonalds Amsterdam"
                },
                new Assignment
                {
                    Source = "Burger King",
                     SourceId = "BK",
                    Customer = "BK",
                    Role = "Ontwikkelaar Java",
                    Description = "We zoeken iemand met 50 jaar ervaring als ontwikkelaar",
                    StartDate = DateTime.Now.AddMonths(2),
                    EndDate = DateTime.Now.AddMonths(6),
                    SubmitDate = DateTime.Now,
                    City = "Amsterdam",
                    Notes = "geen",
                    Title = "Onwikkelaar Java Burger King Amsterdam"
                },
                new Assignment
                {
                    Source = "Kentucky Fried Chicken",
                    SourceId = "KFC",
                    Customer = "KFC",
                   Role = "Ontwikkelaar Java",
                    Description = "We zoeken iemand met 50 jaar ervaring als ontwikkelaar",
                    StartDate = DateTime.Now.AddMonths(2),
                    EndDate = DateTime.Now.AddMonths(6),
                    SubmitDate = DateTime.Now,
                    City = "Amsterdam",
                    Notes = "geen",
                    Title = "Onwikkelaar Java KFC Amsterdam"
                },
                new Assignment
                {
                    Source = "Subway",
                    SourceId = "SUB",
                    Customer = "SUB",
                   Role = "Ontwikkelaar Java",
                    Description = "We zoeken iemand met 50 jaar ervaring als ontwikkelaar",
                    StartDate = DateTime.Now.AddMonths(2),
                    EndDate = DateTime.Now.AddMonths(6),
                    SubmitDate = DateTime.Now,
                    City = "Amsterdam",
                    Notes = "geen",
                    Title = "Onwikkelaar Java Subway Amsterdam"
                },
            };

            await context.Candidates.AddRangeAsync(candidates);
            await context.Assignments.AddRangeAsync(assignments);
            await context.SaveChangesAsync();
        }
    }
}