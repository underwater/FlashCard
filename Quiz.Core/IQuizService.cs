
using System.Collections.Generic;

namespace Quiz.Core
{
    public interface IQuizService
    {
        public decimal CalculateScore();
        public List<Question> GetMarkedQuestions();
        public List<Question> GetWrongQuestions();
        public Question GetNextQuestion();
        public Question GetPreviousQuestion();
        public List<Question> BuildQuiz { get; set; }

    }
}
