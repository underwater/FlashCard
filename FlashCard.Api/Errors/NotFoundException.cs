using System;

namespace FlashCard.Api.Errors
{
    public class NotFoundException : Exception
    {
        public NotFoundException(string msg): base(msg)
        {
            
        }

    }
}