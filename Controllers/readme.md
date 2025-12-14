# Controllers

This directory contains the controller classes for the backend API.

## Overview

Controllers handle incoming HTTP requests, process business logic, and return responses to the client.

## Structure

```
Controllers/
├── [YourController].cs
└── ...
```

## Usage

Each controller class:
- Inherits from `ControllerBase` or `Controller`
- Uses route attributes (`[ApiController]`, `[Route]`)
- Implements action methods for API endpoints
- Handles request validation and response formatting

## Example

```csharp
[ApiController]
[Route("api/[controller]")]
public class YourController : ControllerBase
{
    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        // Your implementation
    }
}
```

## Best Practices

- Keep controllers lean; move business logic to services
- Use dependency injection for services
- Return appropriate HTTP status codes
- Implement proper error handling