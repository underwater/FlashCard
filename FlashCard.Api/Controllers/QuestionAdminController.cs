using FlashCard.Api.Models;
using FlashCard.Api.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FlashCard.Api.Controllers
{
    [Route("api/admin/questions")]
    [ApiController]
    public class QuestionAdminController : ControllerBase
    {
        private readonly IQuestionAdminService service;

        public QuestionAdminController(IQuestionAdminService service)
        {
            this.service = service;
        }
        // GET: api/Questions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Question>>> GetQuestions()
        {
            var result = await service.GetQuestions();

            // TODO: serialization stuck in infinite look?
            // although i've configured ReferenceLoopHandling.Ignore for serializer
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Question>> DeleteQuestion(int id)
        {
            Question result;
            try
            {
                result = await service.RemoveQuestion(id);
            }
            catch (InvalidOperationException ex)
            {
                return NotFound(ex.Message);
            }

            return Ok(result);
        }

        // TODO: The questionId isn't used should we change the url to just answer/{answerId}}
        // if we do it won't be consistent with the AddAnswer below.
        [HttpDelete("{questionId}/answers/")]
        public async Task<ActionResult<Answer>> RemoveAnswer(Answer answer)
        {
            var result = await service.RemoveAnswer(answer.Id);

            return Ok(result);
        }

        [HttpPost("{questionId}/answers/")]
        public async Task<ActionResult<Answer>> AddAnswer(int questionId, [FromBody] Answer answer)
        {
            var result = await service.AddAnswer(questionId, answer);
            return Ok(result);
        }

    }
}