using FlashCard.Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace FlashCard.Api.Repositories
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly DataContext context;

        public QuestionRepository(DataContext context)
        {
            this.context = context;
        }
        public List<Question> GetAll()
        {
            return context.Questions
                .Include(x => x.AnswerOptions)
                .ToList();
                
        }

        public List<Question> GetForTopic(int topicId)
        {
            return context.Questions
                .Where(q => q.Topic.Id == topicId)
                .Include(x => x.AnswerOptions)
                .ToList();
        }

        
    }
}
