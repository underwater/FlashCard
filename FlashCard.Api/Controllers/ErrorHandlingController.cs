using System;
using Microsoft.AspNetCore.Mvc;

namespace FlashCard.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ErrorHandlingController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index() {
            return Ok();
        }

        [HttpGet]
        public IActionResult HandledException()
        {
            try
            {
                throw new InvalidCastException();
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        [HttpGet]
        public IActionResult UnhandledException()
        {
            throw new InvalidOperationException("Unhandled Server Exception");
        }
    }
}