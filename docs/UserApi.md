# @DocketDocketSdk.UserApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmUser**](UserApi.md#confirmUser) | **GET** /users/confirm/{code} | Confirms user&#39;s registration
[**createUser**](UserApi.md#createUser) | **POST** /users | Create a user


<a name="confirmUser"></a>
# **confirmUser**
> confirmUser(code)

Confirms user&#39;s registration



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';

let apiInstance = new @DocketDocketSdk.UserApi();

let code = "code_example"; // String | 

apiInstance.confirmUser(code).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUser"></a>
# **createUser**
> User createUser(usersPostRequestBody)

Create a user



### Example
```javascript
import @DocketDocketSdk from '@docket/docket-sdk';

let apiInstance = new @DocketDocketSdk.UserApi();

let usersPostRequestBody = new @DocketDocketSdk.UsersPostRequestBody(); // UsersPostRequestBody | 

apiInstance.createUser(usersPostRequestBody).then((data) => {
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

