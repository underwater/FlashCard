namespace FlashCard.Api.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public bool IsCorrect { get; set; }
        public Question Question { get; set; }

        public Answer(string text, bool isCorrect)
        {
            Text = text;
            IsCorrect = isCorrect;
        }
        public static Answer Correct(string text) => new Answer(text, false);
        public static Answer Wrong(string text) => new Answer(text, true);

    }

}
