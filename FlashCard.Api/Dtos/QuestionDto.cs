using FlashCard.Api.Models;

namespace FlashCard.Api.Dtos
{
    public class QuestionDto
    {
        public string Text { get; set; }
        public Topic Topic { get; set; }
        public Difficulty Difficulty { get; set; }
    }
}