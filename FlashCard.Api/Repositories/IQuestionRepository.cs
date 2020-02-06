using FlashCard.Api.Models;
using System.Collections.Generic;

namespace FlashCard.Api.Repositories
{
    public interface IQuestionRepository
    {
        List<Question> GetAll();
        List<Question> GetForTopic(int topicId);
    }
}
