using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlashCard.Api.Models
{
    public class SeedData
    {
        public static void SeedDb(DataContext context)
        {
            context.Database.Migrate();
            if (context.Cards.Count() == 0)
            {
                var angular = new Topic() { Name = "Angular" };
                var asp = new Topic() { Name = "Asp.Net Core" };

                context.AddRange(
                    new Card
                    {
                        Question = "What is ngForms",
                        Answer = "ngForm directive creates a top-level FormGroup instance and binds it to your <form> tag to enable you to work with the form",
                        Topic = angular,
                        IsFavorite = false
                    }, 
                    new Card
                    {
                        Question = "What is a directive",
                        Answer = "Essentially a function that execute when the Angular compiler finds them in the DOM",
                        Topic = angular,
                        IsFavorite = false
                    },
                    new Card
                    {
                        Question = "What are Output Properties",
                        Answer = "Child components can use output properties that define custom events that signal important changes and that allow the parent component to respond when they occur",
                        Topic = angular,
                        IsFavorite = false
                    });

                context.SaveChanges();
            }
        }
    }
}
