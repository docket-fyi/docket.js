# DocketJs.SessionsApi

All URIs are relative to *http://localhost:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSession**](SessionsApi.md#createSession) | **POST** /sessions | Create a new session



## createSession

> InlineResponse2009 createSession(inlineObject4)

Create a new session

Create a new session and, if valid, returns an authentication token (JWT)

### Example

```javascript
import DocketJs from 'docket.js';

let apiInstance = new DocketJs.SessionsApi();
let inlineObject4 = new DocketJs.InlineObject4(); // InlineObject4 | 
apiInstance.createSession(inlineObject4).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

