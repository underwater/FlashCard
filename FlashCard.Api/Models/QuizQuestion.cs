
namespace FlashCard.Api.Models
{
    public class QuizQuestion
    {
        public int QuizId { get; set; }
        public Quiz Quiz { get; set; }
        public int QuestionId { get; set; }
        public Question Questions { get; set; }
    }
}
