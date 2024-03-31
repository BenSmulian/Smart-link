# Backend API Documentation

Welcome to the documentation for our URL shortener backend service.

## Endpoints

### POST /shorten

Shorten a long URL.

#### Request Body

```json
{
  "longUrl": "https://example.com/very/long/url/that/needs/shortening"
}
