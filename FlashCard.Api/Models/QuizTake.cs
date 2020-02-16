using FlashCard.Api.Models;
using System;
using System.Collections.Generic;

namespace Quiz.Core
{
    public class QuizTake
    {
        public DateTime StartedOn { get; set; }
        public User User { get; set; }
        public decimal Score { get; set; }
        public List<UserResponse> UserReponse { get; set; }

    }
}
