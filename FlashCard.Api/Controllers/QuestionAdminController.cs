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
                result = await service.DeleteQuestion(id);
            }
            catch (InvalidOperationException ex)
            {
                return NotFound(ex.Message);
            }

            return Ok(result);
        }

        /*
         * api/admin/question/4/answers
    
        AddAnswer(questionID, Answer (from body))
        UpdateAnswer()
        DeleteAnswer()
         
         */


    }
}