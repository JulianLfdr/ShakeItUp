namespace ShakeItUp.Exceptions;

public class NoCocktailFoundException : Exception
{
    public NoCocktailFoundException() : base("No cocktail was found.") { }
}