using FlashCard.Api.Errors;
using FlashCard.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FlashCard.Api.Services
{
    /*
     * won't worry about transactions / idempotency
     */
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

        public async Task<Question> AddQuestion(Question question)
        {
            ctx.Questions.Add(question);
            await ctx.SaveChangesAsync();
            return question; // TODO: verify if id is updated.
        }
        public async Task<Question> UpdateQuestion(int id, Question updated)
        {
            var existing = await ctx.Questions.FirstOrDefaultAsync(q => q.Id == id);

            if (existing == null)
            {
                throw new NotFoundException($"Question with Id {id} Doesn't Exist");
            }

            // verify if currently logged in user has rights

            // use automapper to copy
            existing.Text = updated.Text;
            existing.Difficulty = updated.Difficulty;
            existing.Topic = updated.Topic;
            // we are purposely not touching the answers

            await ctx.SaveChangesAsync();
            return existing;
        }


        public async Task<Question> RemoveQuestion(int id)
        {
            Question question = await loadQuestionAsync(id);

            if (question == null)
            {
                throw new NotFoundException($"Question with Id {id} Doesn't Exist");
            }
            else
            {
                ctx.Answers.RemoveRange(question.Answers);
                ctx.Questions.Remove(question);
                await ctx.SaveChangesAsync();
            }
            return question;
        }

        public async Task<Answer> RemoveAnswer(int answerId)
        {
            var answer = await ctx.Answers.FirstOrDefaultAsync(a => a.Id == answerId);
            if (answer == null)
            {
                throw new NotFoundException($"Answer with Id {answerId} doesn't Exist");
            }
            ctx.Answers.Remove(answer);
            await ctx.SaveChangesAsync();
            return answer;
        }

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
                throw new NotFoundException($"Question with Id {questionId} doesn't exist");
            }
            return answer;
        }



        public Task<Answer> GetAnswer(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Answer> UpdateAnswer(int answerId, Answer answer)
        {
            throw new NotImplementedException();
        }

        private async Task<Question> loadQuestionAsync(int id)
        {
            return await ctx.Questions
                .Include(q => q.Answers)
                .FirstOrDefaultAsync(q => q.Id == id);
        }
    }


}
