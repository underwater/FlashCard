using FlashCard.Api.Dtos;
using System;
using System.Collections.Generic;

namespace FlashCard.Api.Models
{
    public class Question
    {
        public int Id { get; set; }

        // use delimeter (for rendering english / code snippets / images ?
        public string Text { get; set; }
        public Topic Topic { get; set; }
        public Difficulty Difficulty { get; set; }

        public int AllowedTimeToAnswer { get; set; }
        public List<Answer> AnswerOptions { get; set; }

        public Question() { }
        public Question(QuestionDto dto)
        {
            Text = dto.Text;
            Difficulty = dto.Difficulty;
            Topic = dto.Topic;

        }
    }

}
