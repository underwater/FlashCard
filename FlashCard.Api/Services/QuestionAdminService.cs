using FlashCard.Api.Errors;
using FlashCard.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
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

        public Task<Question> AddQuestion(Question question) 
        { 
            throw new NotImplementedException(); 
        }
        public Task<Question> UpdateQuestion() { throw new NotImplementedException(); }


        public async Task<Question> DeleteQuestion(int id)
        {
            var question = await ctx.Questions.FindAsync(id);

            if (question == null)
            {
                throw new NotFoundException($"Question with Id {id} Doesn't Exist");
            }
            else
            {
                try
                {
                    // TODO: removing children explicitly (as not able to configure EF to do that)
                    ctx.Answers.RemoveRange(question.Answers);
                    ctx.Questions.Remove(question);
                    await ctx.SaveChangesAsync();
                }
                // may arrive here if I delete a question with existing answers
                // should perhaps without cascade delete enforced
                catch (Exception ex)
                {
                    // TODO: what to do here ? 
                   // 
                }
             }
            return question;
        }


    }


}
