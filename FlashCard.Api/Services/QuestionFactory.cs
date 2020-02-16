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
                question.Answers.Add(Answer.Correct("True"));
                question.Answers.Add(Answer.Wrong("False"));
            }
            else
            {
                question.Answers.Add(Answer.Wrong("True"));
                question.Answers.Add(Answer.Correct("False"));
            }
            return question;
        }

    }

}
