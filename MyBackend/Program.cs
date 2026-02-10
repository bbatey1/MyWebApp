var builder = WebApplication.CreateBuilder(args);

// Allow React dev server (5173 and 4) to call this API
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
        policy.WithOrigins("http://localhost:5173", "http://localhost:5174")
              .AllowAnyMethod()
              .AllowAnyHeader()
    );
});

var app = builder.Build();
app.UseCors("AllowReactApp");

// Sample tasks
var tasks = new List<TodoItem>
{
    new(1, "Learn .NET", true),
    new(2, "Master React", false)
};

// API endpoints
app.MapGet("/api/tasks", () => tasks);

app.MapPost("/api/tasks", (TodoItem newItem) =>
{
    tasks.Add(newItem);
    return Results.Created($"/api/tasks/{newItem.Id}", newItem);
});

app.Run();

record TodoItem(int Id, string Title, bool IsCompleted);
