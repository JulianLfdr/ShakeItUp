using Microsoft.Extensions.Options;
using ShakeItUp.Configurations;
using ShakeItUp.Models;

namespace ShakeItUp.Services;

public sealed class CocktailService : ICocktailService
{
    private readonly string _apiPath;
    private readonly TheCocktailDBConfig _config;
    private readonly HttpClient _httpClient;

    public CocktailService(IOptions<TheCocktailDBConfig> config, HttpClient httpClient)
    {
        _config = config.Value;
        _httpClient = httpClient;
        _apiPath = $"{_config.ApiPath}/{_config.ApiPath}";
    }

    public async Task<Cocktail> GetRandom()
    {
        Console.WriteLine(_httpClient.BaseAddress);

        var response = await _httpClient.GetAsync($"{_apiPath}/{_config.Endpoints.Random}");
        if (response.IsSuccessStatusCode){
            var cocktail = await response.Content.ReadAsStringAsync();
            return new Cocktail {
                Name = "TEst"
            };
        }

        return null;
    }
}
