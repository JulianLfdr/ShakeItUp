using System.ComponentModel.DataAnnotations;

namespace ShakeItUp.Configurations;

public sealed class TheCocktailDBConfig
{
    public const string SectionName = "TheCocktailDB";

    [Required]
    public Uri BaseUrl { get; init; } = null!;

    [Required]
    public string ApiPath { get; init; } = null!;

    [Required]
    public string ApiKey { get; init; } = null!;

    [Required]
    public TheCocktailDBEndpoints Endpoints { get; init; } = null!;
}

public sealed class TheCocktailDBEndpoints
{
    [Required]
    public TheCocktailDBEndpoint GetRandom { get; set; } = null!;

    [Required]
    public TheCocktailDBEndpoint<TheCocktailDBEndpointSearch> SearchCocktail { get; set; } = null!;

    [Required]
    public TheCocktailDBEndpoint<TheCocktailDBEndpointGetDetails> GetDetails { get; set; } = null!;
}

public class TheCocktailDBEndpoint
{
    [Required]
    public string Path { get; set; } = null!;
}

public sealed class TheCocktailDBEndpoint<T> : TheCocktailDBEndpoint
    where T : class
{
    [Required]
    public T Parameters { get; set; } = null!;
}

public sealed class TheCocktailDBEndpointSearch
{
    [Required]
    public string ByName { get; set; } = null!;

    [Required]
    public string ByFirstLetter { get; set; } = null!;
    
    [Required]
    public string ByIngredientName { get; set; } = null!;
}

public sealed class TheCocktailDBEndpointGetDetails
{
    [Required]
    public string CocktailById { get; set; } = null!;

    [Required]
    public string IngredientById { get; set; } = null!;
}
