using AutoMapper;
using ShakeItUp.Models;
using ShakeItUp.Models.ApiResponse;

namespace ShakeItUp;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<CocktailApiResponse, Cocktail>()
            .ForMember(dest => dest.Id, opt => opt.MapFrom(src => int.Parse(src.Id)))
            .ForMember(dest => dest.Tags, opt => opt.MapFrom(src => GetTags(src.Tags)))
            .ForMember(dest => dest.IsAlcoholic, opt => opt.MapFrom(src => src.Alcoholic == "Alcoholic"))
            .ForMember(dest => dest.Instructions, opt => opt.MapFrom(src => GetInstructions(src.Instructions)))
            .ForMember(dest => dest.Thumbnail, opt => opt.MapFrom(src => new Uri(src.Thumbnail)))
            .ForMember(dest => dest.Ingredients, opt => opt.MapFrom(src => GetIngredients(src)))
            .ForMember(dest => dest.Measures, opt => opt.MapFrom(src => GetMeasures(src)));
    }

    private List<string> GetTags(string? tags)
    {
        return tags?.Split(',').ToList() ?? new();
    }

    private List<string> GetInstructions(string instructions)
    {
        return instructions.Split('.').Where(i => !string.IsNullOrEmpty(i)).Select(i => i.Trim()).ToList();
    }

    private List<string> GetIngredients(CocktailApiResponse src)
    {
        var ingredients = new List<string>();
        for (int i = 1; i <= 15; i++)
        {
            string? ingredientValue = src.GetType().GetProperty($"Ingredient{i}")?.GetValue(src) as string;
            if (!string.IsNullOrEmpty(ingredientValue))
            {
                ingredients.Add(ingredientValue.Trim());
            }
        }
        return ingredients;
    }

    private List<string> GetMeasures(CocktailApiResponse src)
    {
        var measures = new List<string>();
        for (int i = 1; i <= 15; i++)
        {
            string? measureValue = src.GetType().GetProperty($"Measure{i}")?.GetValue(src) as string;
            if (!string.IsNullOrEmpty(measureValue))
            {
                measures.Add(measureValue.Trim());
            }
        }
        return measures;
    }
}
