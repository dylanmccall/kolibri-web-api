# KolibriApi.AppApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appApiInitializeRead**](AppApi.md#appApiInitializeRead) | **GET** /app/api/initialize/([0-9a-f]{32}) | 


<a name="appApiInitializeRead"></a>
# **appApiInitializeRead**
> appApiInitializeRead(_32)





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.AppApi();

var _32 = "_32_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.appApiInitializeRead(_32, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_32** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

