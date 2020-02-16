
namespace FlashCard.Api.Services
{
    using System.Collections.Generic;
    using FlashCard.Api.Models;
    using System;


    public class QuizTakerService
    {
        public List<Quiz> GetQuizList() { throw new NotImplementedException(); }
        public void StartQuiz() { throw new NotImplementedException(); }
        public void EndQuiz() { throw new NotImplementedException(); }
        public decimal CalculateScore() { throw new NotImplementedException(); }
        public Question GetNextQuestion() { throw new NotImplementedException(); }
        public bool ValidateAnswer(string question, string answer) { throw new NotImplementedException(); }

        public decimal GetProgress { get; set; }
        public List<UserResponse> UserResponses { get; set; }

    }


}
