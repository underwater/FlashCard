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

        public async Task<Question> GetQuestion(int id)
        {
            var result = await loadQuestionAsync(id);
            return result;
        }

        public Task<Question> AddQuestion(Question question) 
        { 
            throw new NotImplementedException(); 
        }
        public Task<Question> UpdateQuestion() { throw new NotImplementedException(); }


        public async Task<Question> RemoveQuestion(int id)
        {
            Question question = await loadQuestionAsync(id);

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

        // TODO: what should I return QUESTION or ANSWER?
        public async Task<Answer> RemoveAnswer(int answerId)
        {
            // TODO: Is it better to remove the answer by first loading the question and removing it from the collection? Does it matter which approach?
            var answer = await ctx.Answers.FirstOrDefaultAsync(a => a.Id == answerId);
            if (answer == null)
            {
                throw new NotFoundException($"Answer with Id {answerId} doesn't Exist");
            }
            ctx.Answers.Remove(answer);
            await ctx.SaveChangesAsync();
            return answer;
        }

        // TODO: what should I return QUESTION or ANSWER?
        public async Task<Answer> AddAnswer(int questionId, Answer answer)
        {
            var question = await loadQuestionAsync(questionId);
            if (question != null)
            {
                question.Answers.Add(answer);
                await ctx.SaveChangesAsync();
            }
            else
            {
                // what type of exception to throw?
            }

            // how to return the added answer with the id?
            return answer;
        }

        private async Task<Question> loadQuestionAsync(int id)
        {
            return await ctx.Questions
                .Include(q => q.Answers)
                .FirstOrDefaultAsync(q => q.Id == id);
        }

    }


}
