using FlashCard.Api.Dtos;
using FlashCard.Api.Models;

namespace FlashCard.Api.Services
{
    public static class QuestionFactory
    {
        public static Question CreateTrueFalse(QuestionDto dto, bool desiredAnswer)
        {
            var question = new Question(dto);

            if (desiredAnswer)
            {
                question.AnswerOptions.Add(Answer.Correct("True"));
                question.AnswerOptions.Add(Answer.Wrong("False"));
            }
            else
            {
                question.AnswerOptions.Add(Answer.Wrong("True"));
                question.AnswerOptions.Add(Answer.Correct("False"));
            }
            return question;
        }

    }

}
