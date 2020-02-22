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
        Task<Question> RemoveQuestion(int id);
        Task<Question> UpdateQuestion(int id, Question question);
        Task<Answer> GetAnswer(int id);
        Task<Answer> AddAnswer(int questionId, Answer answer);
        Task<Answer> RemoveAnswer(int id);
        Task<Answer> UpdateAnswer(int answerId, Answer answer);
    }
}