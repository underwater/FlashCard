namespace FlashCard.Api.Models
{
    public class Card
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public bool IsFavorite { get; set; }
        public Topic Topic { get; set; }
    }
}
