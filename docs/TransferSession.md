# KolibriApi.TransferSession

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**startTimestamp** | **Date** |  | [optional] 
**lastActivityTimestamp** | **Date** |  | [optional] 
**active** | **Boolean** |  | [optional] 
**filter** | **String** |  | [optional] 
**push** | **Boolean** |  | [optional] 
**recordsTransferred** | **Number** |  | [optional] 
**recordsTotal** | **Number** |  | [optional] 
**bytesReceived** | **Number** |  | [optional] 
**bytesSent** | **Number** |  | [optional] 
**syncSession** | **String** |  | [optional] 
**serverFsic** | **String** |  | [optional] 
**clientFsic** | **String** |  | [optional] 
**transferStage** | **String** |  | [optional] 
**transferStageStatus** | **String** |  | [optional] 


<a name="TransferStageEnum"></a>
## Enum: TransferStageEnum


* `initializing` (value: `"initializing"`)

* `serializing` (value: `"serializing"`)

* `queuing` (value: `"queuing"`)

* `transferring` (value: `"transferring"`)

* `dequeuing` (value: `"dequeuing"`)

* `deserializing` (value: `"deserializing"`)

* `cleanup` (value: `"cleanup"`)




<a name="TransferStageStatusEnum"></a>
## Enum: TransferStageStatusEnum


* `pending` (value: `"pending"`)

* `started` (value: `"started"`)

* `completed` (value: `"completed"`)

* `errored` (value: `"errored"`)




