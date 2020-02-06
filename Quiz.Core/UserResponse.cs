namespace Quiz.Core
{
    public class UserResponse
    {
        public Question QuizQuestion { get; set; }
        public AnswerOption UserAnswer { get; set; }
    }
}