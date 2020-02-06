namespace FlashCard.Api.Models
{
    public class UserResponse
    {
        public Question QuizQuestion { get; set; }
        public AnswerOption UserAnswer { get; set; }
    }
}