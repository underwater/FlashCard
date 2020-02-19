using FlashCard.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FlashCard.Api.Services
{
    public interface IQuestionAdminService
    {
        Task<List<Question>> GetQuestions();
        Task<Question> AddQuestion(Question question);
        Task<Question> UpdateQuestion();
        Task<Question> DeleteQuestion();

    }
}