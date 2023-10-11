using ShakeItUp.Enums;
using ShakeItUp.Services;

namespace ShakeItUp.Cocktails;

public static class CocktailsModule
{
    public static void MapCocktailEndpoints(this WebApplication app)
    {
        app.MapGet("api/random", GetRandomCocktail);
        app.MapGet("api/search", SearchCocktail);
        // app.MapGet("api/search", SearchCocktail);
    }

    public static async Task<IResult> SearchCocktail(string searchTerm, ICocktailService cocktailService)
    {
        var cocktail = await cocktailService.SearchCocktail(searchTerm, CocktailSearchMode.ByName);
        return Results.Ok(cocktail);
    }

    public static async Task<IResult> GetRandomCocktail(ICocktailService cocktailService)
    {
        var cocktail = await cocktailService.GetRandomCocktail();
        return Results.Ok(cocktail);
    }
}
