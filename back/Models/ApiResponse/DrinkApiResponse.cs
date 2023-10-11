using System.Text.Json.Serialization;
using ShakeItUp.Models.ApiResponse;

namespace ShakeItUp.ShakeItUp.Models.ApiResponse;

public class DrinkApiResponse
{
    [JsonPropertyName("drinks")]
    public List<CocktailApiResponse> Cocktails { get; set; } = new();
}
