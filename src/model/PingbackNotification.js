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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KolibriApi) {
      root.KolibriApi = {};
    }
    root.KolibriApi.PingbackNotification = factory(root.KolibriApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PingbackNotification model module.
   * @module model/PingbackNotification
   * @version v0
   */

  /**
   * Constructs a new <code>PingbackNotification</code>.
   * @alias module:model/PingbackNotification
   * @class
   * @param id {String} 
   * @param versionRange {String} 
   * @param timestamp {Date} 
   */
  var exports = function(id, versionRange, timestamp) {
    this.id = id;
    this.versionRange = versionRange;
    this.timestamp = timestamp;
  };

  /**
   * Constructs a <code>PingbackNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PingbackNotification} obj Optional instance to populate.
   * @return {module:model/PingbackNotification} The populated <code>PingbackNotification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('version_range'))
        obj.versionRange = ApiClient.convertToType(data['version_range'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Date');
      if (data.hasOwnProperty('link_url'))
        obj.linkUrl = ApiClient.convertToType(data['link_url'], 'String');
      if (data.hasOwnProperty('i18n'))
        obj.i18n = ApiClient.convertToType(data['i18n'], Object);
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} versionRange
   */
  exports.prototype.versionRange = undefined;

  /**
   * @member {Date} timestamp
   */
  exports.prototype.timestamp = undefined;

  /**
   * @member {String} linkUrl
   */
  exports.prototype.linkUrl = undefined;

  /**
   * @member {Object} i18n
   */
  exports.prototype.i18n = undefined;

  return exports;

}));
