namespace Quiz.Core
{
    public class AnswerOption
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }

        public AnswerOption(string text, bool isCorrect)
        {
            Text = text;
            IsCorrect = isCorrect;
        }
        public static AnswerOption Correct(string text) => new AnswerOption(text, false);
        public static AnswerOption Wrong(string text) => new AnswerOption(text, true);

    }

}
