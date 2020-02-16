namespace FlashCard.Api.Models
{
    public class UserResponse
    {
        public int QuizQuestionId { get; set; }
        public Question QuizQuestion { get; set; }

        public int UserAnswerId { get; set; }
        public Answer UserAnswer { get; set; }
    }
}