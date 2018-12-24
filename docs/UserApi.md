# @DocketDocketSdk.UserApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersPost**](UserApi.md#usersPost) | **POST** /users | Create a user


<a name="usersPost"></a>
# **usersPost**
> User usersPost(usersPostRequestBody)

Create a user



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';

let apiInstance = new @DocketDocketSdk.UserApi();

let usersPostRequestBody = new @DocketDocketSdk.UsersPostRequestBody(); // UsersPostRequestBody | 

apiInstance.usersPost(usersPostRequestBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersPostRequestBody** | [**UsersPostRequestBody**](UsersPostRequestBody.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

