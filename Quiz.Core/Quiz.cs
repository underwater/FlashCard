using System.Collections.Generic;

namespace Quiz.Core
{
    public class Quiz
    {
        public string Title { get; set; }
        public int NumberOfQuestions { get; set; }
        public int TimeToComplete { get; set; }
        public int PassingScore { get; set; }
        public bool ShowCorrectAnswerDuringQuiz { get; set; }
        public List<Question> Questions { get; set; }

    }
}
