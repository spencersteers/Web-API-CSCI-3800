# Results

## REST

### Request Headers

| Header | Value | Description |
| ------ | ----- | ----------- |
| Accept-Encoding | gzip,deflate | What encodings the client can accept |
| Host | www.googleapis.com | Domain name of server |
| Connection | Keep-Alive | Control options for the connection | 
| User-Agent | Apache-HttpClient/4.1.1 (java 1.5) | The user agent string of the user agent; how the user identifies itself |

### Response Headers

| Header | Value | Description |
| ------ | ----- | ----------- |
| Expires | Mon, 09 Feb 2015 07:12:04 GMT | The date/time for when the response is stale
| Date | Mon, 09 Feb 2015 07:12:04 GMT | The date and time that the message was sent | 
| Cache-Control | private, max-age=0, must-revalidate, no-transform | How the client should handle cacheing the response | 
| ETag | "_rmWcTkH-s1QFjg9mC3Xel0FZSQ/gJIX7X5fuhQunJhy7nw4svzBJks" | An identifier for a specific version of a resource |
| Vary | Origin |  Indicates the set of request-header fields that fully determines, while the response is fresh, whether a cache is permitted to use the response to reply to a subsequent request without revalidation. |
| Vary | X-Origin |  Indicates the set of request-header fields that fully determines, while the response is fresh, whether a cache is permitted to use the response to reply to a subsequent request without revalidation. |
| Content-Type | application/json; charset=UTF-8 | The mimetype of the request content |
| X-Content-Type-Options | nosniff | Prevents Internet Explorer from MIME-sniffing a response away from the declared content-type |
| X-Frame-Options | SAMEORIGIN |  Indicate whether or not a browser should be allowed to render a page in a `<frame>`, `<iframe>` or `<object>` |
| X-XSS-Protection | 1; mode=block | Toggle on and off the "XSS Filter" of IE8 which can be used to prevent XSS attacks |
| Content-Length | 26982 | The size of the body in bytes |
| Server | GSE | Name of server |
| Alternate-Protocol | 443:quic,p=0.02 | Alternate protocol to use. QUIC is an experimental protocol used by Google |


## SOAP

### Request Headers

| Header | Value | Description | 
| ------ | ----- | ----------- |
| Accept-Encoding | gzip,deflate | What encodings the client can accept |
| Content-Type | text/xml;charset=UTF-8 | The mimetype of the request content |
| SOAPAction | "http://www.webservicex.net/GetGeoIP" | The intent of the SOAP request | 
| Content-Length | 315 | The size of the body in bytes |
| Host | www.webservicex.net | Domain name of server |
| Connection | Keep-Alive | Control options for the connection | 
| User-Agent | Apache-HttpClient/4.1.1 (java 1.5) | The user agent string of the user agent; how the user identifies itself |


### Response Headers

| Header | Value | Description | 
| ------ | ----- | ----------- |
| X-AspNet-Version | 4.0.30319 | Version of ASP.NET used by server |
| Vary | Accept-Encoding | Indicates the set of request-header fields that fully determines, while the response is fresh, whether a cache is permitted to use the response to reply to a subsequent request without revalidation. |
| Date | Mon, 09 Feb 2015 06:42:56 GMT | The date and time that the message was sent |
| Content-Length | 393 | The size of the body in bytes |
| #status# | HTTP/1.1 200 OK | HTTP status code |
| Content-Encoding |  gzip | The encoding of the content | 
| Content-Type | text/xml; charset=utf-8 | The mimetype of the content |
| Server | Microsoft-IIS/7.0 | Name of server |
| X-Powered-By | ASP.NET | The software that generated the response | 
| Cache-Control | private, max-age=0 | How the client should handle cacheing the response | 