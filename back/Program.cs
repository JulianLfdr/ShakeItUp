using Microsoft.Extensions.Options;
using ShakeItUp.Cocktails;
using ShakeItUp.Configurations;
using ShakeItUp.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOptions<TheCocktailDBConfig>()
    .BindConfiguration(TheCocktailDBConfig.SectionName)
    .ValidateDataAnnotations()
    .ValidateOnStart();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddCors();

// Register the service and add a typed http client
builder.Services.AddHttpClient<ICocktailService, CocktailService>((serviceProvider, httpClient) =>
{
    var config = serviceProvider.GetRequiredService<IOptions<TheCocktailDBConfig>>().Value;
    httpClient.BaseAddress = config.BaseUrl;
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapCocktailEndpoints();

app.UseHttpsRedirection();

app.UseCors(builder => {
    builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
});

app.Run();
