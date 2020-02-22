using FlashCard.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FlashCard.Api.Services
{
    public interface IQuestionAdminService
    {
        Task<List<Question>> GetQuestions();
        Task<Question> GetQuestion(int id);
        Task<Question> AddQuestion(Question question);

        // TODO: better pass entire object Question?
        Task<Question> RemoveQuestion(int id);
        Task<Question> UpdateQuestion();


        Task<Answer> AddAnswer(int questionId, Answer answer);
        Task<Answer> RemoveAnswer(int answerId);

    }
}