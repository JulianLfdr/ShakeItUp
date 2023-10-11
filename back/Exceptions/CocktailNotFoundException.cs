namespace ShakeItUp.Exceptions;

public class CocktailNotFoundException : Exception
{
    public CocktailNotFoundException(int id) : base($"Cocktail <{id}> was found.") { }
}