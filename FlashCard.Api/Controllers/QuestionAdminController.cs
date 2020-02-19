using FlashCard.Api.Models;
using FlashCard.Api.Services;
using Microsoft.AspNetCore.Mvc;
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
            return Ok(result);
        }
    }
}