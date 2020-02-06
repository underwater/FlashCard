using FlashCard.Api.Entities;
using System;
using System.Collections.Generic;

namespace FlashCard.Api.Models
{
    public class QuizInstance
    {
        public DateTime StartedOn { get; set; }
        public DateTime CompletedOn { get; set; }
        public User User { get; set; }
        public decimal Score { get; set; }
        public List<UserResponse> UserResponses { get; set; }
    }
}
