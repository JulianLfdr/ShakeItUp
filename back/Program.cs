using Microsoft.Extensions.Options;
using ShakeItUp.Cocktails;
using ShakeItUp.Configurations;
using ShakeItUp.Services;

var builder = WebApplication.CreateBuilder(args);

// ShakeItUpConfig config = new();
// builder.Configuration.Bind(config);

// builder.Services.Configure<ShakeItUpConfig>(builder.Configuration);

builder.Services.AddOptions<TheCocktailDBConfig>()
    .BindConfiguration(TheCocktailDBConfig.SectionName)
    .ValidateDataAnnotations()
    .ValidateOnStart();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ICocktailService, CocktailService>();

builder.Services.AddHttpClient<CocktailService>((serviceProvider, httpClient) =>
{
    var config = serviceProvider.GetRequiredService<IOptions<TheCocktailDBConfig>>().Value;
    httpClient.BaseAddress = new Uri("https://thecocktaildb.com");
});


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapCocktailEndpoints();

app.UseHttpsRedirection();

app.Run();
