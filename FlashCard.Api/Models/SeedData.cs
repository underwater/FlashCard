using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace FlashCard.Api.Models
{
    public class SeedData
    {
        public static void SeedDb(DataContext context)
        {
            context.Database.Migrate();
            var angular = new Topic() { Name = "Angular" };
            var asp = new Topic() { Name = "Asp.Net Core" };

            if (context.Cards.Count() == 0)
            {
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

            if (context.Questions.Count() == 0)
            {
                context.AddRange(
                    new Question
                    {
                        Text = "What does AOT stand for?",
                        AnswerOptions = new List<AnswerOption>() {

                            AnswerOption.Correct("ahead-of-time compilation"),
                            AnswerOption.Wrong("Angular Object Templates"),
                            AnswerOption.Wrong("All of the above"),
                            AnswerOption.Wrong("None of the above")
                        },

                        Topic = angular,
                        Difficulty = Difficulty.Easy,
                        References = "https://angular.io/guide/aot-compiler"
                    },

                  new Question
                  {
                      Text = "Which directive would you use to conditionally include a template depending on the runtime value of an expression?",
                      AnswerOptions = new List<AnswerOption>() {

                            AnswerOption.Correct("ngIf"),
                            AnswerOption.Wrong("ngWhen"),
                            AnswerOption.Wrong("ngWhile"),
                            AnswerOption.Wrong("ngFor")
                        },

                      Topic = angular,
                      Difficulty = Difficulty.Easy,
                      References = "https://angular.io/guide/aot-compiler"
                  });
            }
            context.SaveChanges();

        }
    }
}
