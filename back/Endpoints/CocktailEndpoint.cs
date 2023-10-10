using ShakeItUp.Services;

namespace ShakeItUp.Cocktails;

public static class CocktailsModule
{
    public static void MapCocktailEndpoints(this WebApplication app)
    {
        app.MapGet("/random", GetRandomCocktail);
    }

    public static async Task<IResult> GetRandomCocktail(ICocktailService cocktailService)
    {
        var cocktail = await cocktailService.GetRandom();
        return Results.Ok(cocktail);
    }
}
