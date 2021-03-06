/*
 * Kolibri API
 * Kolibri Swagger API
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RecordMaxCounterBuffer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecordMaxCounterBuffer'));
  } else {
    // Browser globals (root is window)
    if (!root.KolibriApi) {
      root.KolibriApi = {};
    }
    root.KolibriApi.Buffer = factory(root.KolibriApi.ApiClient, root.KolibriApi.RecordMaxCounterBuffer);
  }
}(this, function(ApiClient, RecordMaxCounterBuffer) {
  'use strict';

  /**
   * The Buffer model module.
   * @module model/Buffer
   * @version v0
   */

  /**
   * Constructs a new <code>Buffer</code>.
   * @alias module:model/Buffer
   * @class
   * @param rmcbList {Array.<module:model/RecordMaxCounterBuffer>} 
   */
  var exports = function(rmcbList) {
    this.rmcbList = rmcbList;
  };

  /**
   * Constructs a <code>Buffer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Buffer} obj Optional instance to populate.
   * @return {module:model/Buffer} The populated <code>Buffer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('serialized'))
        obj.serialized = ApiClient.convertToType(data['serialized'], 'String');
      if (data.hasOwnProperty('deleted'))
        obj.deleted = ApiClient.convertToType(data['deleted'], 'Boolean');
      if (data.hasOwnProperty('last_saved_instance'))
        obj.lastSavedInstance = ApiClient.convertToType(data['last_saved_instance'], 'String');
      if (data.hasOwnProperty('last_saved_counter'))
        obj.lastSavedCounter = ApiClient.convertToType(data['last_saved_counter'], 'Number');
      if (data.hasOwnProperty('hard_deleted'))
        obj.hardDeleted = ApiClient.convertToType(data['hard_deleted'], 'Boolean');
      if (data.hasOwnProperty('partition'))
        obj.partition = ApiClient.convertToType(data['partition'], 'String');
      if (data.hasOwnProperty('source_id'))
        obj.sourceId = ApiClient.convertToType(data['source_id'], 'String');
      if (data.hasOwnProperty('model_name'))
        obj.modelName = ApiClient.convertToType(data['model_name'], 'String');
      if (data.hasOwnProperty('conflicting_serialized_data'))
        obj.conflictingSerializedData = ApiClient.convertToType(data['conflicting_serialized_data'], 'String');
      if (data.hasOwnProperty('model_uuid'))
        obj.modelUuid = ApiClient.convertToType(data['model_uuid'], 'String');
      if (data.hasOwnProperty('transfer_session'))
        obj.transferSession = ApiClient.convertToType(data['transfer_session'], 'String');
      if (data.hasOwnProperty('profile'))
        obj.profile = ApiClient.convertToType(data['profile'], 'String');
      if (data.hasOwnProperty('rmcb_list'))
        obj.rmcbList = ApiClient.convertToType(data['rmcb_list'], [RecordMaxCounterBuffer]);
      if (data.hasOwnProperty('_self_ref_fk'))
        obj.selfRefFk = ApiClient.convertToType(data['_self_ref_fk'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} serialized
   */
  exports.prototype.serialized = undefined;

  /**
   * @member {Boolean} deleted
   */
  exports.prototype.deleted = undefined;

  /**
   * @member {String} lastSavedInstance
   */
  exports.prototype.lastSavedInstance = undefined;

  /**
   * @member {Number} lastSavedCounter
   */
  exports.prototype.lastSavedCounter = undefined;

  /**
   * @member {Boolean} hardDeleted
   */
  exports.prototype.hardDeleted = undefined;

  /**
   * @member {String} partition
   */
  exports.prototype.partition = undefined;

  /**
   * @member {String} sourceId
   */
  exports.prototype.sourceId = undefined;

  /**
   * @member {String} modelName
   */
  exports.prototype.modelName = undefined;

  /**
   * @member {String} conflictingSerializedData
   */
  exports.prototype.conflictingSerializedData = undefined;

  /**
   * @member {String} modelUuid
   */
  exports.prototype.modelUuid = undefined;

  /**
   * @member {String} transferSession
   */
  exports.prototype.transferSession = undefined;

  /**
   * @member {String} profile
   */
  exports.prototype.profile = undefined;

  /**
   * @member {Array.<module:model/RecordMaxCounterBuffer>} rmcbList
   */
  exports.prototype.rmcbList = undefined;

  /**
   * @member {String} selfRefFk
   */
  exports.prototype.selfRefFk = undefined;

  return exports;

}));
