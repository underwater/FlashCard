using System.Collections.Generic;

namespace FlashCard.Api.Models
{
    public class QuizDefinition
    {
        public int NumberOfQuestions { get; set; }
        public int TimeToComplete { get; set; }
        public int PassingScore { get; set; }
        public bool ShowCorrectAnswerDuringQuiz { get; set; }
        public List<Question> Questions { get; set; }

    }
}
