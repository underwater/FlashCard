using System.Collections.Generic;

namespace FlashCard.Api.Models
{
    public class Quiz
    {
        // Angular Newbie Quiz
        public string Title { get; set; }

        // 10 
        public int NumberOfQuestions { get; set; }

        // 60 min
        public int TimeToComplete { get; set; }

        // 70%
        public int PassingScore { get; set; }

        // list of question 
        public List<Question> Questions { get; set; }

    }
}
