using ShakeItUp.Enums;
using ShakeItUp.Models;

namespace ShakeItUp.Services;

public interface ICocktailService
{
    Task<List<Cocktail>> SearchCocktail(string searchTerm, CocktailSearchMode searchMode);
    Task<Cocktail> LoadCocktail(int id);
    Task<List<Cocktail>> LoadCocktails(List<int> ids);
    Task<Cocktail> GetRandomCocktail();
}
