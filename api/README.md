# Understanding RESTful APIs

*REST (Representational State Transfer) is an architectural style for designing networked applications that has become the standard for web services.*

*RESTful APIs provide a flexible, lightweight way to integrate applications and enable communication between different systems.*

*RESTful APIs use HTTP requests to perform CRUD operations (Create, Read, Update, Delete) on resources, which are represented as URLs.*
*REST is stateless, meaning each request from a client to a server must contain all the information needed to understand and process the request.*

*Unlike SOAP or RPC, REST is not a protocol but an architectural style that leverages existing web standards like HTTP, URI, JSON, and XML.*

## HTTP Methods and Their Usage

*RESTful APIs use standard HTTP methods to perform operations on resources.*

```
GET -------> Retrieve resource(s) -------> GET /api/users
POST -------> Create a new resource -------> POST /api/users
PUT	-------> Update a resource completely -------> PUT /api/users/123
PATCH -------> Update a resource partially -------> PATCH /api/users/123
DELETE -------> Delete a resource -------> DELETE /api/users/123
```