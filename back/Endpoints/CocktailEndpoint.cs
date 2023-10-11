using Microsoft.AspNetCore.Mvc;
using ShakeItUp.Enums;
using ShakeItUp.Services;

namespace ShakeItUp.Cocktails;

public static class CocktailsModule
{
    public static void MapCocktailEndpoints(this WebApplication app)
    {
        app.MapGet("api/random", GetRandomCocktail);
        app.MapGet("api/search", SearchCocktail);
        app.MapGet("api/load", LoadCocktail);
    }

    public static async Task<IResult> SearchCocktail(
        ICocktailService cocktailService,
        [FromQuery(Name = "term")] string searchTerm,
        [FromQuery(Name = "mode")] CocktailSearchMode searchMode = CocktailSearchMode.ByName)
    {
        var cocktail = await cocktailService.SearchCocktail(searchTerm, searchMode);
        return Results.Ok(cocktail);
    }

    public static async Task<IResult> LoadCocktail(
        ICocktailService cocktailService,
        [FromQuery] int id)
    {
        var cocktail = await cocktailService.LoadCocktail(id);
        return Results.Ok(cocktail);
    }

    public static async Task<IResult> GetRandomCocktail(ICocktailService cocktailService)
    {
        var cocktail = await cocktailService.GetRandomCocktail();
        return Results.Ok(cocktail);
    }
}
