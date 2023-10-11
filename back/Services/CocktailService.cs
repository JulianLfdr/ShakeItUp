using System.Text.Json;
using AutoMapper;
using Microsoft.Extensions.Options;
using ShakeItUp.Configurations;
using ShakeItUp.Enums;
using ShakeItUp.Exceptions;
using ShakeItUp.Models;
using ShakeItUp.ShakeItUp.Models.ApiResponse;

namespace ShakeItUp.Services;

public sealed class CocktailService : ICocktailService
{
    private readonly IMapper _mapper;
    private readonly string _apiPath;
    private readonly TheCocktailDBConfig _config;
    private readonly HttpClient _httpClient;

    public CocktailService(IOptions<TheCocktailDBConfig> config, HttpClient httpClient, IMapper mapper)
    {
        _config = config.Value;
        _httpClient = httpClient;
        _mapper = mapper;
        _apiPath = $"{_config.ApiPath}/{_config.ApiKey}";
    }

    public async Task<List<Cocktail>> SearchCocktail(string searchTerm, CocktailSearchMode searchMode)
    {
        string url = $"{_apiPath}/{_config.Endpoints.SearchCocktail.Path}?";
        url += searchMode switch
        {
            CocktailSearchMode.ByFirstLetter => _config.Endpoints.SearchCocktail.Parameters.ByFirstLetter,
            CocktailSearchMode.ByIngredientName => _config.Endpoints.SearchCocktail.Parameters.ByIngredientName,
            _ => _config.Endpoints.SearchCocktail.Parameters.ByName,
        };
        url += $"={searchTerm}";

        var response = await _httpClient.GetAsync(url);
        if (!response.IsSuccessStatusCode)
        {
            throw new HttpRequestException($"{nameof(SearchCocktail)} - Error while querying TheCocktailDB.\nStatus code <{response.StatusCode}>.\n{_httpClient.BaseAddress + url}\n");
        }

        var jsonResponse = await response.Content.ReadAsStringAsync();
        var drinks = JsonSerializer.Deserialize<DrinkApiResponse>(jsonResponse);
        if (drinks == null)
        {
            throw new NoCocktailFoundException();
        }
        
        return _mapper.Map<List<Cocktail>>(drinks!.Cocktails);
    }

    public async Task<Cocktail> GetRandomCocktail()
    {
        var url = $"{_apiPath}/{_config.Endpoints.GetRandom.Path}";
        var response = await _httpClient.GetAsync(url);
        if (!response.IsSuccessStatusCode)
        {
            throw new HttpRequestException($"{nameof(GetRandomCocktail)} - Error while querying TheCocktailDB.\nStatus code <{response.StatusCode}>.\n{_httpClient.BaseAddress + url}\n");
        }

        var jsonResponse = await response.Content.ReadAsStringAsync();
        var drinks = JsonSerializer.Deserialize<DrinkApiResponse>(jsonResponse);
        if (drinks == null)
        {
            throw new NoCocktailFoundException();
        }

        return _mapper.Map<Cocktail>(drinks.Cocktails.FirstOrDefault());
    }
}
