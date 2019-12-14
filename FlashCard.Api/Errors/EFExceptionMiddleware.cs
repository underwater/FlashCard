using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace FlashCard.Api.Errors
{
    public class EFExceptionMiddleware
    {
        private readonly RequestDelegate _next;


        public EFExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                // TODO: wrapping the rest of the middleware in this try / catch
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(httpContext, ex);
            }
        }

        private Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            if (exception is DbUpdateException)
            {
                // TODO: cannot return ex, object cycle was detected which is not supported
                // TODO: How to pass status code 699, still returning 200 OK
                return context.Response.WriteAsync(new ErrorDetails()
                {
                    StatusCode = 699,
                    Message = "EF Error"
                }.ToString());
            }
            else
            {

                context.Response.ContentType = "application/json";
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                return context.Response.WriteAsync(new ErrorDetails()
                {
                    StatusCode = context.Response.StatusCode,
                    Message = "Internal Server Error from the custom middleware."
                }.ToString());

            }


        }
    }
}
