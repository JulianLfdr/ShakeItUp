namespace ShakeItUp.Models;

public class Cocktail
{
    public required int Id { get; set; }

    public required string Name { get; set; }

    public string? AlternateName { get; set; }

    public List<string> Tags { get; set; } = new();

    public required string Category { get; set; }

    public string? IBA { get; set; }

    public required bool Alcoholic { get; set; }

    public required string Glass { get; set; }

    public required string Instructions { get; set; }

    public required Uri Thumbnail { get; set; }

    public required List<string> Ingredients { get; set; }

    public required List<string> Measures { get; set; }
}
