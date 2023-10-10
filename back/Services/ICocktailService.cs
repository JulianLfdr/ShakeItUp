using ShakeItUp.Models;

namespace ShakeItUp.Services;

public interface ICocktailService
{
    Task<Cocktail> GetRandom();
}
