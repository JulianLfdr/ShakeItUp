using Microsoft.AspNetCore.Mvc;
using ShakeItUp.Enums;
using ShakeItUp.Exceptions;
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
        try
        {
            var cocktail = await cocktailService.SearchCocktail(searchTerm, searchMode);
            return Results.Ok(cocktail);
        }
        catch (NoCocktailFoundException ex)
        {
            return Results.NotFound(ex.Message);
        }
        catch (Exception ex)
        {
            return Results.Problem(ex.Message);
        }
    }

    public static async Task<IResult> LoadCocktail(
        ICocktailService cocktailService,
        [FromQuery] int id)
    {
        try
        {
            var cocktail = await cocktailService.LoadCocktail(id);
            return Results.Ok(cocktail);
        }
        catch (CocktailNotFoundException ex)
        {
            return Results.NotFound(ex.Message);
        }
        catch (Exception ex)
        {
            return Results.Problem(ex.Message);
        }
    }

    public static async Task<IResult> GetRandomCocktail(ICocktailService cocktailService)
    {
        try
        {
            var cocktail = await cocktailService.GetRandomCocktail();
            return Results.Ok(cocktail);
        }
        catch (NoCocktailFoundException ex)
        {
            return Results.NotFound(ex.Message);
        }
        catch (Exception ex)
        {
            return Results.Problem(ex.Message);
        }
    }
}
