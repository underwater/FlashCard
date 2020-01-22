using System;
using Microsoft.AspNetCore.Mvc;

namespace FlashCard.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    // TODO: not sure why not reacheable
    public class ErrorHandlingController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index() {
            return Ok();
        }

        [HttpGet]
        //[Route('/HandledException')]
        public IActionResult HandledException()
        {
            try
            {
                throw new InvalidCastException();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        //[Route('/UnhandledException')]
        public IActionResult UnhandledException()
        {
            throw new InvalidOperationException("Unhandled Server Exception");
        }
    }
}