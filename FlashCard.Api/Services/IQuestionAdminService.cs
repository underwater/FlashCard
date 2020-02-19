using FlashCard.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FlashCard.Api.Services
{
    public interface IQuestionAdminService
    {
        Task<Question> AddQuestion();
        Task<Question> DeleteQuestion();
        Task<List<Question>> GetQuestions();
        Task<Question> UpdateQuestion();
    }
}