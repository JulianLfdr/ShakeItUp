using System.ComponentModel.DataAnnotations;

namespace ShakeItUp.Configurations;

public sealed class TheCocktailDBConfig
{
    public const string SectionName = "TheCocktailDB";

    [Required]
    public string BaseUrl { get; init; } = string.Empty;

    [Required]
    public string ApiPath { get; init; } = string.Empty;

    [Required]
    public string ApiKey { get; init; } = string.Empty;


    [Required]
    public TheCocktailDBEndpoints Endpoints { get; init; } = null!;
}

public sealed class TheCocktailDBEndpoints {
    [Required]
    public string Random { get; set; } = string.Empty;

    [Required]
    public string Search { get; set; } = string.Empty;
}
