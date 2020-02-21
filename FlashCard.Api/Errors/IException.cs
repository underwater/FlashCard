namespace FlashCard.Api.Errors
{
    // TODO: Is this useful, or just derive from .net Exception base class
    public interface IException
    {
        string Message { get; }
    }
}
