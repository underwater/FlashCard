using FlashCard.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FlashCard.Api.Services
{
    public interface IQuestionAdminService
    {
        Task<List<Question>> GetQuestions();
        Task<Question> AddQuestion(Question question);

        // TODO: better pass entire object Question?
        Task<Question> DeleteQuestion(int id);
        Task<Question> UpdateQuestion();

    }
}