using FlashCard.Api.Models;
using System.Collections.Generic;


namespace FlashCard.Api.Services
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        IEnumerable<User> GetAll();
    }

}
