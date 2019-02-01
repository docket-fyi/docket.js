# DocketJsSdk.UserApi

All URIs are relative to *http://localhost:3000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmUser**](UserApi.md#confirmUser) | **GET** /users/confirm/{code} | Confirms user&#39;s registration
[**createUser**](UserApi.md#createUser) | **POST** /users | Create a user
[**forgotPassword**](UserApi.md#forgotPassword) | **POST** /users/forgot-password | Forgot password
[**resetPassword**](UserApi.md#resetPassword) | **POST** /users/reset-password | Reset password


<a name="confirmUser"></a>
# **confirmUser**
> confirmUser(code)

Confirms user&#39;s registration



### Example
```javascript
import DocketJsSdk from 'docket-js-sdk';

let apiInstance = new DocketJsSdk.UserApi();

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
import DocketJsSdk from 'docket-js-sdk';

let apiInstance = new DocketJsSdk.UserApi();

let usersPostRequestBody = new DocketJsSdk.UsersPostRequestBody(); // UsersPostRequestBody | 

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

<a name="forgotPassword"></a>
# **forgotPassword**
> forgotPassword(forgotPasswordPostRequestBody)

Forgot password



### Example
```javascript
import DocketJsSdk from 'docket-js-sdk';

let apiInstance = new DocketJsSdk.UserApi();

let forgotPasswordPostRequestBody = new DocketJsSdk.ForgotPasswordPostRequestBody(); // ForgotPasswordPostRequestBody | 

apiInstance.forgotPassword(forgotPasswordPostRequestBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forgotPasswordPostRequestBody** | [**ForgotPasswordPostRequestBody**](ForgotPasswordPostRequestBody.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetPassword"></a>
# **resetPassword**
> resetPassword(resetPasswordPostRequestBody)

Reset password



### Example
```javascript
import DocketJsSdk from 'docket-js-sdk';

let apiInstance = new DocketJsSdk.UserApi();

let resetPasswordPostRequestBody = new DocketJsSdk.ResetPasswordPostRequestBody(); // ResetPasswordPostRequestBody | 

apiInstance.resetPassword(resetPasswordPostRequestBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetPasswordPostRequestBody** | [**ResetPasswordPostRequestBody**](ResetPasswordPostRequestBody.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

