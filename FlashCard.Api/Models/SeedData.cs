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

            AddCards(context);
            AddQuestions(context);

        }

        private static void AddQuestions(DataContext context)
        {
            var angular = new Topic() { Name = "Angular" };
            if (context.Questions.Count() == 0)
            {
                context.AddRange(
                    new Question
                    {
                        Text = "What does AOT stand for?",
                        Answers = new List<Answer>() {

                            Answer.Correct("ahead-of-time compilation"),
                            Answer.Wrong("Angular Object Templates"),
                            Answer.Wrong("All of the above"),
                            Answer.Wrong("None of the above")
                        },

                        Topic = angular,
                        Difficulty = Difficulty.Easy,
                    },

                  new Question
                  {
                      Text = "Which directive would you use to conditionally include a template depending on the runtime value of an expression?",
                      Answers = new List<Answer>() {

                            Answer.Correct("ngIf"),
                            Answer.Wrong("ngWhen"),
                            Answer.Wrong("ngWhile"),
                            Answer.Wrong("ngFor")
                        },

                      Topic = angular,
                      Difficulty = Difficulty.Easy,
                  });
            }
            context.SaveChanges();
        }

        private static void AddCards(DataContext context)
        {
            var angular = new Topic() { Name = "Angular" };

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

            context.SaveChanges();
        }
    }
}
