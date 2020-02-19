using FlashCard.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlashCard.Api.Services
{
    // crud
    public class QuestionAdminService : IQuestionAdminService
    {
        public DataContext ctx { get; }

        public QuestionAdminService(DataContext context)
        {
            ctx = context;
        }

        public Task<List<Question>> GetQuestions()
        {
            var result = ctx.Questions
                .Include(q => q.Answers)
                .ToListAsync();
            return result;
        }

        public Task<Question> AddQuestion() { throw new NotImplementedException(); }
        public Task<Question> UpdateQuestion() { throw new NotImplementedException(); }
        public Task<Question> DeleteQuestion() { throw new NotImplementedException(); }

    }


}
