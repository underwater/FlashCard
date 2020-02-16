using System;
using System.Collections.Generic;

namespace FlashCard.Api.Models
{
    public class QuizTake
    {
        public int Id { get; set; }
        public DateTime StartedOn { get; set; }
        public User User { get; set; }
        public decimal Score { get; set; }
        public List<UserResponse> UserReponse { get; set; }

    }
}
