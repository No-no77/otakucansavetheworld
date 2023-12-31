---
published: true
subtitle:
date: 2023-07-18
tags: internet programming
---

#  HTTP

## Introduction to HTTP

HTTP stands for Hypertext Transfer Protocol. It's a protocol used for transmitting hypertext[^1] over the internet. HTTP is a request-response protocol [^2] in the client-server computing model[^3].

HTTP is stateless, which means that the server does not keep any data (state) between two requests. Though often based on a [TCP/I](https://en.wikipedia.org/wiki/Internet_protocol_suite) layer, it can be used on any reliable transport layer - that is, a protocol that doesn't lose messages silently, such as [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol).

## HTTP Methods

HTTP defines methods to indicate the desired action to be performed on the identified resource. HTTP methods are also referred to as "request methods". Here are some of the most common methods:

### GET

The `GET` method is used to retrieve information from the given server using a given [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier). Requests using `GET` should only retrieve data and should have no other effect on the data.

### POST

The `POST` method is used to send data to the server. The type of data being sent to the server and how the server interprets the data depends on the `Content-Type` header.

### PUT

The `PUT` method is used from the client to send a replacement document to the server under the request URI. If the server has no resource under the given URI, a new resource is created.

### DELETE

The `DELETE` method is used to request the server to delete a file at a location specified by the given URI.

### HEAD

The `HEAD` method is similar to `GET` but only returns the HTTP headers and no document body. This is useful for retrieving meta-information written in response headers, without having to transport the entire content.

### PATCH

The `PATCH` method is used to apply partial modifications to a resource.

### OPTIONS

The `OPTIONS` method is used to describe the communication options for the target resource.

## HTTP Status Codes

HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped into five classes:

- Informational responses (100–199)
- Successful responses (200–299)
- Redirection messages (300–399)
- Client error responses (400–499)
- Server error responses (500–599)

For example, `200` status code means 'OK', `404` means 'Not Found', and `500` means 'Internal Server Error'.

## Footnotes

[^1]: Hypertext is [text](https://en.wikipedia.org/wiki/E-text "E-text") displayed on a [computer display](https://en.wikipedia.org/wiki/Computer_display "Computer display") or other [electronic devices](https://en.wikipedia.org/wiki/Electronic_devices "Electronic devices") with references ([hyperlinks](https://en.wikipedia.org/wiki/Hyperlinks "Hyperlinks")) to other text that the reader can immediately access.

[^2]:  Request–response is one of the basic methods [computers](https://en.wikipedia.org/wiki/Computer "Computer") use to communicate with each other in a [network](https://en.wikipedia.org/wiki/Computer_network "Computer network"), in which the first computer sends a _request_ for some [data](https://en.wikipedia.org/wiki/Data_(computing) "Data (computing)") and the second _responds_ to the request.

[^3]: The [client–server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model) is a [distributed application](https://en.wikipedia.org/wiki/Distributed_application "Distributed application") structure that partitions tasks or workloads between the providers of a resource or service, called [servers](https://en.wikipedia.org/wiki/Server_(computing) "Server (computing)"), and service requesters, called [clients](https://en.wikipedia.org/wiki/Client_(computing) "Client (computing)").