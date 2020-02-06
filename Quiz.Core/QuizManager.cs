using System;
using System.Collections.Generic;

namespace Quiz.Core
{
    public class QuizManager
    {
        // query
        public DateTime StartedOn { get; }
        public DateTime CompletedOn { get; set; }
        public decimal Progress { get; set; }
        public decimal Score { get; set; }
        public List<UserResponse> UserResponses { get; set; }

        // commands
        public void FinishQuiz() { }
        public void StartQuiz() { }
        public void AnswerQuestion() { }
        public void GetNextQuestion() { }
    }



}
