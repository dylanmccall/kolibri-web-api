# KolibriApi.DeviceApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceApiDeviceChannelList**](DeviceApi.md#deviceApiDeviceChannelList) | **GET** /device/api/device_channel/ | 
[**deviceApiDeviceChannelRead**](DeviceApi.md#deviceApiDeviceChannelRead) | **GET** /device/api/device_channel/{id}/ | 
[**deviceApiDevicechannelorderCreate**](DeviceApi.md#deviceApiDevicechannelorderCreate) | **POST** /device/api/devicechannelorder | 
[**deviceApiImportexportsizeviewCreate**](DeviceApi.md#deviceApiImportexportsizeviewCreate) | **POST** /device/api/importexportsizeview | 


<a name="deviceApiDeviceChannelList"></a>
# **deviceApiDeviceChannelList**
> [DeviceChannelMetadata] deviceApiDeviceChannelList(opts)





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.DeviceApi();

var opts = { 
  'available': "available_example", // String | 
  'hasExercise': "hasExercise_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deviceApiDeviceChannelList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **available** | **String**|  | [optional] 
 **hasExercise** | **String**|  | [optional] 

### Return type

[**[DeviceChannelMetadata]**](DeviceChannelMetadata.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deviceApiDeviceChannelRead"></a>
# **deviceApiDeviceChannelRead**
> DeviceChannelMetadata deviceApiDeviceChannelRead(id)





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.DeviceApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deviceApiDeviceChannelRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**DeviceChannelMetadata**](DeviceChannelMetadata.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deviceApiDevicechannelorderCreate"></a>
# **deviceApiDevicechannelorderCreate**
> deviceApiDevicechannelorderCreate()





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.DeviceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deviceApiDevicechannelorderCreate(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deviceApiImportexportsizeviewCreate"></a>
# **deviceApiImportexportsizeviewCreate**
> deviceApiImportexportsizeviewCreate()





### Example
```javascript
var KolibriApi = require('kolibri_api');
var defaultClient = KolibriApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new KolibriApi.DeviceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deviceApiImportexportsizeviewCreate(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

